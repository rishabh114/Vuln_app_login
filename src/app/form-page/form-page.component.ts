import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-example',
  template: `
    <div>
      <h1>Submit Sensitive Data:</h1>
      <input #userInput type="text" placeholder="Enter sensitive data" />
      <button (click)="sendData(userInput.value)">Submit</button>
    </div>
  `
})
export class FormPageComponent {
  constructor(private http: HttpClient) {}

  sendData(data: string) {
    // Vulnerable: sending data over HTTP instead of HTTPS
    this.http.post('http://example.com/api/data', { data }) // Source: User input; Sink: HTTP request
      .subscribe(response => console.log(response));
  }
}
