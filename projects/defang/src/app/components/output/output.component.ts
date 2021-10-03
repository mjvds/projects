import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Input, ViewChild } from '@angular/core';

const TEMPLATE = `
  <div class="container" #container [innerHTML]="value"></div>
  <textarea #clipboardInput style="position: fixed; top: -9999px;"></textarea>
  <div class="hover-info">Click to copy</div>
`;

@Component({
  selector: 'de-output',
  template: TEMPLATE,
  styleUrls: ['./output.component.scss'],
  host: {
    '(click)': 'click($event)'
  }
})
export class OutputComponent {
  @ViewChild('container') container?: ElementRef;
  @ViewChild('clipboardInput') clipboardInput?: ElementRef;

  @Input() value = '';

  click(e: MouseEvent): void {
    if (!this.container?.nativeElement.innerText) return;
    const input = this.clipboardInput?.nativeElement as HTMLInputElement;
    input.value = this.container?.nativeElement.innerText;
    input.focus();
    input.setSelectionRange(0, input.value.length);
    this._doc.execCommand('copy');
    input.value = '';
  }

  constructor(@Inject(DOCUMENT) private _doc: HTMLDocument) {}
}
