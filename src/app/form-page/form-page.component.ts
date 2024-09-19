import { Component } from '@angular/core';

@Component({
  selector: 'app-form-page',
  template: `
    <div>
      <h1>SQL Injection Example</h1>
      <textarea [(ngModel)]="userInput" placeholder="Enter SQL query"></textarea>
      <button (click)="submitQuery()">Submit Query</button>
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
  result: string | undefined;

  submitQuery() {
    // WARNING: This is a vulnerable simulation
    const unsafeQuery = `SELECT * FROM users WHERE name = '${this.userInput}'`; // Vulnerable SQL query construction

    // Simulating execution of the query
    this.result = this.executeQuery(unsafeQuery);
  }

  executeQuery(query: string): string {
    // Simulate what would happen if this query were executed
    console.log('Executing query:', query);
    // Here we would normally execute the query against a database
    // For demonstration purposes, we will just return a message
    return `Query executed: ${query}`;
  }
}
