import { ChangeDetectorRef, Component } from '@angular/core';
import { RadioButtonItem } from './radio-buttons/radio-buttons.component';

export type TDEFANG = {
  /**
   * matched value will be replace by key
   */
  [replacement: string]: RegExp;
};

interface DefangItem {
  text: string;
  regex: RegExp;
}

@Component({
  selector: 'de-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  deradios: RadioButtonItem[] = [
    {
      label: 'DEFANG',
      value: 'defang',
    },
    {
      label: 'REFANG',
      value: 'refang',
    },
  ];

  /**
   * add style to defang and refang text
   * ex.      _addStyle('a', 'b', 'c')
   * output: a<span class="de-replaced">b</span>c
   */
  private _addStyle(left: string, mid: string, right: string): string {
    return `${left}<span class="de-replaced">${mid}</span>${right}`;
  }

  private readonly _DEFANG: DefangItem[] = [
    {
      text: this._addStyle('h', 'xx', 'p'),
      regex: /^http/gm,
    },
    {
      text: this._addStyle('f', 'x', 'p'),
      regex: /^ftp/gm,
    },
    {
      text: this._addStyle('[', '.', ']'),
      regex: /\.(?!\])/gm,
    },
  ];

  private readonly _REFANG: DefangItem[] = [
    {
      text: this._addStyle('h', 'tt', 'p'),
      regex: /^hxxp/gm,
    },
    {
      text: this._addStyle('f', 't', 'p'),
      regex: /^ftp/gm,
    },
    {
      text: this._addStyle('', '.', ''),
      regex: /\[\.\]/gm,
    },
  ];

  /**
   * holds output defanged or refanged
   */
  transformed = '';

  actionType = 'defang';

  defang(value: string): void {
    this._DEFANG.forEach((e) => (value = value?.replace(e.regex, e.text)));
    // added pre tag to prevent newline
    this.transformed = `<pre>${value ?? ''}</pre>`;
    this._cdr.markForCheck();
  }

  refang(value: string): void {
    // added pre tag to prevent newline
    this._REFANG.forEach((a) => (value = value?.replace(a.regex, a.text)));
    this.transformed = `<pre>${value ?? ''}</pre>`;
    this._cdr.markForCheck();
  }

  onTypeChanged(type: string, textarea: HTMLTextAreaElement): void {
    switch (type) {
      case 'defang':
        this.defang(textarea.value);
        break;
      case 'refang':
        this.refang(textarea.value);
        break;
    }
  }

  onValueChanged(el: HTMLTextAreaElement): void {
    this.onTypeChanged(this.actionType, el);
  }

  onRadioValueChanged(el: HTMLTextAreaElement): void {
    this.onTypeChanged(this.actionType, el);
  }

  constructor(private _cdr: ChangeDetectorRef) {}
}
