import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class XssService {
  constructor(private route: ActivatedRoute) {}

  // Method to process user profile from query parameters
  processUserProfile() {
    this.route.queryParams.subscribe(params => {
      const userProfile = `<h1>User Profile: ${params['name']}</h1>`; // Source: Unsanitized user input
      document.getElementById('user-profile')!.innerHTML = userProfile; // Sink: Vulnerable code
    });
  }

  // Method to create unsanitized HTML from form input
  createUserProfile(name: string): string {
    return `<div><h1>User Profile: ${name}</h1></div>`; // Source: Unsanitized user input
  }
}