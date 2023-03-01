import { Component, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  template: `<app-skeleton><div><router-outlet></router-outlet></div></app-skeleton>`
})
export class AppComponent {
  title = 'angular';
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
    ) {}

  ngOnInit() {
    this.document.documentElement.lang = 'ru';
    this.renderer.addClass(this.document.documentElement, 'h-full');
    this.renderer.addClass(this.document.body, 'bg-slate-100');
    this.renderer.addClass(this.document.body, 'h-full');
  }
}