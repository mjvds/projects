# RADIO BUTTONS COMPONENT

## Inputs

### items
> An array of items displayed by the UI component.
### value
> Specifies the currently selected value.

## Events
### onValueChanged
> A function that is executed after the UI component's value is changed.
## template (lbRadioButton)
> template context contain RadioButtonItem object

## USAGE
app.component.html
```
<lb-radio-buttons
  [items]="deradios"
  [(value)]="value"
  (onValueChanged)="onRadioValueChanged(textArea)"
  >
  <div *lbRadioButton="let d">
    {{ d.label }}
  </div>
</lb-radio-buttons>
```
app.component.ts
```
items: RadioButtonItem[] = [
  {
    label: 'DEFANG',
    value: 'defang',
  },
  {
    label: 'REFANG',
    value: 'refang',
  },
];

value = 'defang';
```
