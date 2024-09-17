import { Component } from '@angular/core';
import { RedirectService } from './redirect.service'; // Adjust the path if necessary

@Component({
  selector: 'app-redirector',
  templateUrl: './redirector.component.html',
  styleUrls: ['./redirector.component.css']
})
export class RedirectorComponent {
  constructor(private redirectService: RedirectService) {}

  testRedirect(url: string): void {
    this.redirectService.redirectTo(url).subscribe({
      next: () => {
        console.log('Redirection attempted');
      },
      error: (err) => {
        console.error('Redirect error', err);
      }
    });
  }
}
