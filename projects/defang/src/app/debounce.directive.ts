import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';
import debounce from 'lodash-es/debounce';

@Directive({ selector: '[deDebounce]' })
export class DebounceDirective {
  @Output() deDebounce = new EventEmitter<HTMLElement>();

  private _debounce = debounce(() => this.deDebounce.emit(this._el.nativeElement), 500);

  @HostListener('keydown', ['$event'])
  keydown(e: any) { this._debounce(); }

  constructor(private _el: ElementRef) {}
}
