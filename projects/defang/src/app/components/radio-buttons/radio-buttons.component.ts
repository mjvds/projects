import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild,
    Directive, EmbeddedViewRef,
    EventEmitter,
    Input, Output,
    Renderer2,
    TemplateRef,
    ViewContainerRef,
} from '@angular/core';

export interface RadioButtonItem {
  label: string;
  value: any;
}

export interface RadioButtonSelectedItem {
  el: HTMLElement;
  item: RadioButtonItem 
}

export const DE_RADIO_SELECTED_CLASS = 'de-radio-selected';

/**
 * default radio item class name
 */
export const DE_RADIO_ITEM_CLASS = 'de-radio-item';

@Directive({ selector: '[deRadioButton]' })
export class RadioButtonDirective {

  @Input() set deRadioButtonOf(name: string) { }

  constructor(
    public template: TemplateRef<any>,
  ) {}
}

@Component({
  selector: 'de-radio-buttons',
  template: '<ng-content>',
  styleUrls: ['./radio-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioButtonsComponent implements AfterViewInit {
  @ContentChild(RadioButtonDirective, { static: false }) radioButton?: RadioButtonDirective;

  @Output() onValueChanged = new EventEmitter<RadioButtonSelectedItem>();

  private _value: any = null;
  @Input()
    set value(value: any) {
      if (this._value === value) return;
      this._value = value;

      // if value is changed without clicking at the button
      if (this._selectedItem?.item?.value !== value) {
        // update the UI
        this._selectItemByValue(value);
      }
    }
    get value() { return this._value; }
  @Output() valueChange = new EventEmitter<any>();

  private _clickUnlisteners: Function[] = [];

  private _renderedRadioButtons: EmbeddedViewRef<any>[] = [];

  private _selectedItem: RadioButtonSelectedItem | null = null;

  @Input() items: RadioButtonItem[] | null = null;

  constructor(
    private _renderer: Renderer2,
    private _viewContainer: ViewContainerRef,
    public cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this._renderItems();
  }

  private _renderItems(): void {
    this._detachClickEvents();
    if (this._renderedRadioButtons.length) {
      this._renderedRadioButtons.forEach((a) => a.destroy());
    }
    this.items?.forEach((item, index) => {
      if (!this.radioButton) return;
      // template context
      const context = { $implicit: item },
            viewRef = this._viewContainer.createEmbeddedView(this.radioButton.template, context, index);
      if (viewRef) { this._renderedRadioButtons.push(viewRef); }

      const el = viewRef.rootNodes[0];
      this._renderer.addClass(el, DE_RADIO_ITEM_CLASS);
      this._attachClick(el, item);
      if (item.value === this.value) {
        // @ts-ignore-next
        this._selectItem(el, item)
      }
    });
  }

  private _selectItemByValue(value: any): void {
    if (!this._renderedRadioButtons.length || !this.items?.length) return;
    const index = this.items?.findIndex(a => a.value === value);
    if (index !== -1) {
      // update the UI
      // @ts-ignore-next
      this._selectItem(this._renderedRadioButtons[index].rootNodes[0], this.items[index]);
    }
  }

  private _attachClick(el: HTMLElement, item: any): void {
    this._clickUnlisteners.push(this._renderer.listen(el, 'click', _ => this._selectItem(el, item)));
  }

  private _selectItem(el: HTMLElement, item: any): void {
    if (this._selectedItem) { this._renderer.removeClass(this._selectedItem.el, DE_RADIO_SELECTED_CLASS); }
    this._renderer.addClass(el, DE_RADIO_SELECTED_CLASS);
    this._selectedItem = { el, item };
    this.valueChange.emit(item.value);
    this.onValueChanged.emit(this._selectedItem);
  }

  private _detachClickEvents(): void {
    this._clickUnlisteners.forEach(a => a());
    // remove all unlisteners functions stored in _clickUnlisteners array
    this._clickUnlisteners.length = 0;
  }

  ngOnDestroy(): void {
    this._detachClickEvents();
  }

}