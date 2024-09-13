import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {
  formData: any = {};
  safeHtmlContent: any = {};

  constructor(private router: Router, private sanitizer: DomSanitizer) {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      this.formData = JSON.parse(localStorage.getItem(`${currentUser}_formData`) || '{}');
      this.safeHtmlContent = {
        name: this.sanitizer.bypassSecurityTrustHtml(this.formData.name || ''),
        id: this.sanitizer.bypassSecurityTrustHtml(this.formData.id || ''),
        mobile: this.sanitizer.bypassSecurityTrustHtml(this.formData.mobile || ''),
        address: this.sanitizer.bypassSecurityTrustHtml(this.formData.address || '')
      };
    } else {
      this.router.navigate(['/login']);
    }
  }

  navigateTo(route: string) {
    this.router.navigate([`/${route}`]);
  }

  signOut() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('formData');
    this.router.navigate(['/login']);
  }
}
