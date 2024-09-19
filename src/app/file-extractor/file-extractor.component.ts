import { Component } from '@angular/core';

@Component({
  selector: 'app-file-extractor',
  template: `
    <div>
      <h1>File Extractor Example</h1>
      <input type="file" (change)="onFileChange($event)" />
      <div *ngIf="message">{{ message }}</div>
    </div>
  `,
  styles: [`
    input {
      margin: 10px 0;
    }
  `]
})
export class FileExtractorComponent {
  message: string | undefined;

  onFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      const file = target.files[0];
      this.extractFile(file);
    }
  }

  extractFile(file: File) {
    // Simulating file extraction process
    const fileName = file.name;

    // Simulate the extraction logic
    // WARNING: Vulnerable to Zip Slip if not validated properly
    if (fileName.includes('../')) {
      this.message = 'Invalid file path detected!'; // Simulating prevention of Zip Slip
    } else {
      this.message = `Extracting: ${fileName}`; // Simulate successful extraction
      console.log(`Extracting file: ${fileName}`); // Sink: Here you would write to the file system in a real scenario
    }
  }
}
