import {Directive, ElementRef, HostListener, OnInit} from '@angular/core';
import {CurrencyPipe} from './../pipe/curency.pipe';

@Directive({selector: '[currencyFormatter]', providers: [CurrencyPipe]})
export class CurrencyDirective implements OnInit {

  private el: HTMLInputElement;

  constructor(private elementRef: ElementRef,
              private currencyPipe: CurrencyPipe) {
    this.el = this.elementRef.nativeElement;
  }

  ngOnInit() {
    this.el.value = this.currencyPipe.transform(this.el.value);
  }

  @HostListener('focus', ['$event.target.value'])
  onFocus(value) {
    if (value !== '0') {
      this.el.value = this.currencyPipe.parse(value); // opossite of transform
    } else {
      this.el.value = '';
    }
  }

  @HostListener('blur', ['$event.target.value'])
  onBlur(value) {
    this.el.value = this.currencyPipe.transform(value);
  }
}
