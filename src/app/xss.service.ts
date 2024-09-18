import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class XssService {
  constructor(private route: ActivatedRoute) {}
  // dimmt aldkd
  processUserProfile() {
    this.route.queryParams.subscribe(params => {
      const userProfile = `<h1>${params['name']}</h1>`; // Source: Unsanitized user input
      document.getElementById('user-profile')!.innerHTML = userProfile; // Sink: Vulnerable code
    });
  }
}
