import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
      <div>
      <h1>Submit Sensitive Data:</h1>
      <input #userInput type="text" placeholder="Enter sensitive data" />
      <button (click)="sendData(userInput.value)">Submit</button>
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
  constructor(private http: HttpClient) {}

  testRegex() {
    // Vulnerable regex: inefficient pattern that can lead to ReDoS
    const regex = /^(a+)+$/; // This regex is susceptible to ReDoS
    try {
      const start = performance.now();
      this.result = regex.test(this.userInput);
      const end = performance.now();
      console.log(`Regex executed in ${end - start}ms`);
    } catch (error) {
      console.error('Regex failed:', error);
      this.result = false;
    }
  }
  sendData(data: string) {
    // Vulnerable: sending data over HTTP instead of HTTPS
    this.http.post('http://example.com/api/data', { data }) // Source: User input; Sink: HTTP request
      .subscribe(response => console.log(response));
  }
}
