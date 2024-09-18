import { Component, OnInit } from '@angular/core';
import { XssService } from '../xss.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userName: string = '';
  userProfileHtml: string = '';

  constructor(private xssService: XssService) {}

  ngOnInit(): void {
    this.xssService.processUserProfile(); // Process query parameters on init
  }

  // Method to generate and display user profile from form input
  generateProfile(): void {
    this.userProfileHtml = this.xssService.createUserProfile(this.userName);
    document.getElementById('user-profile')!.innerHTML = this.userProfileHtml; // Sink: Vulnerable code
  }
}