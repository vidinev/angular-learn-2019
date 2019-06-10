import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

interface AppItem {
  title: string;
  value: number;
}

@Component({
  selector: 'app-button-select',
  templateUrl: './button-select.component.html',
  styleUrls: ['./button-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ButtonSelectComponent),
      multi: true
    }
  ]
})
export class ButtonSelectComponent implements OnInit, ControlValueAccessor {
  @Input() items: AppItem[] = [{
    title: 'val',
    value: 1
  }, {
    title: 'qwe',
    value: 2
  }];
  selectedItemState: AppItem = { title: '', value: null };

  get selectedItem(): AppItem {
    return this.selectedItemState;
  }
  set selectedItem(item: AppItem) {
    this.selectedItemState = item && item.value ? item : { title: '', value: null };
    this.propagateChange(this.selectedItem.value);
  };

  propagateChange = (change: any) => { return change; };

  ngOnInit() { }

  writeValue(value: AppItem | number) {
    if (typeof value === 'number') {
      this.selectedItem = this.items
        .find((item: AppItem) => item.value === +value);
      return;
    }
    this.selectedItem = value;
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {
  }

  inputChange(target: EventTarget) {
    const existingItems = this.items
      .filter((item: AppItem) => item.title === (target as HTMLInputElement).value);
    if (existingItems && existingItems.length === 1) {
      this.selectedItem = existingItems[0];
    }
  }
}
