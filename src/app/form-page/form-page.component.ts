import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css'],
})
export class FormPageComponent implements OnInit {
  formData = {
    name: '',
    id: '',
    mobile: '',
    address: ''
  };
  sanitizedContent: { [key: string]: SafeHtml } = {};

  constructor(private router: Router, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    // Load the old form data from localStorage
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const storedData = localStorage.getItem(`${currentUser}_formData`);
      if (storedData) {
        this.formData = JSON.parse(storedData);
        this.sanitizeContent(); // Optional: sanitize if needed
      }
    }
  }

  submitForm() {
    // Save form data
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      localStorage.setItem(`${currentUser}_formData`, JSON.stringify(this.formData));
    }
    this.sanitizeContent();

    // Navigate to the welcome page after saving form data
    this.router.navigate(['/welcome']).then(success => {
      if (success) {
        console.log('Navigation to welcome page successful');
      } else {
        console.error('Navigation to welcome page failed');
      }
    });
  }

  sanitizeContent() {
    this.sanitizedContent = {
      name: this.sanitizer.bypassSecurityTrustHtml(this.formData.name),
      id: this.sanitizer.bypassSecurityTrustHtml(this.formData.id),
      mobile: this.sanitizer.bypassSecurityTrustHtml(this.formData.mobile),
      address: this.sanitizer.bypassSecurityTrustHtml(this.formData.address),
    };
  }

  navigateTo(route: string) {
    this.router.navigate([`/${route}`]);
  }
}
