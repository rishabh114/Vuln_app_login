import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.css'],
})
export class InputPageComponent {
  userInput: string = '';
  displayInput: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) {}

  submitInput() {
    this.displayInput = this.sanitizer.bypassSecurityTrustHtml(this.userInput); // Bypass sanitation
  }
}
