import { Component } from '@angular/core';

@Component({
  selector: 'app-regex-example',
  template: `
    <div>
      <h1>Regular Expression Denial of Service Example</h1>
      <textarea [(ngModel)]="userInput" placeholder="Enter input to test"></textarea>
      <button (click)="testRegex()">Test Regex</button>
      <div *ngIf="result !== undefined">
        <h3>Result: {{ result }}</h3>
      </div>
    </div>
  `,
  styles: [`
    textarea {
      width: 100%;
      height: 100px;
    }
  `]
})
export class FormPageComponent {
  userInput: string = '';
  result: boolean | undefined;

  testRegex() {
    // Vulnerable regex: inefficient pattern that can lead to ReDoS
    const regex = /^(a+)+$/; // This regex is susceptible to ReDoS
    try {
      this.result = regex.test(this.userInput);
    } catch (error) {
      console.error('Regex failed:', error);
      this.result = false;
    }
  }
}
