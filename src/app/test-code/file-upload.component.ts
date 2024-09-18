// src/app/file-upload/file-upload.component.ts

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  selectedFile: File | null = null;

  constructor(private http: HttpClient) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      this.selectedFile = input.files[0]; // No validation on file type
    }
  }

  onUpload(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile); // No size or type checks

      // Vulnerable HTTP POST request over insecure protocol without validation
      this.http.post('http://localhost:3000/upload', formData).subscribe(
        response => console.log('Upload successful', response),
        error => console.error('Upload failed: ', error.message) // Exposing error message
      );
    } else {
      alert('No file selected');
    }
  }
}