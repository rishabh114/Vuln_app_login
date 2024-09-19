import { Component } from '@angular/core';
import * as fs from 'fs';
import * as path from 'path';
import * as unzipper from "unzipper"; // Assuming you are using the 'unzipper' package

@Component({
  selector: 'app-file-extractor',
  template: `
    <h2>File Extractor</h2>
    <input type="file" (change)="onFileChange($event)" />
  `,
})
export class FileExtractorComponent {
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const targetDir = path.join(__dirname, 'extracted_files'); // Target extraction directory

      // Simulate reading the zip file
      const readStream = fs.createReadStream(file.path)
        .pipe(unzipper.Parse()) // Source
        .on('entry', (entry: unzipper.Entry) => {
          const fileName = entry.path;

          // Vulnerable: Directly write to the target directory without validation
          entry.pipe(fs.createWriteStream(path.join(targetDir, fileName))); // Sink
        });
    }
  }
}
