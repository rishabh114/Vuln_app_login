import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileExtractorComponent } from './file-extractor.component';

describe('FileExtractorComponent', () => {
  let component: FileExtractorComponent;
  let fixture: ComponentFixture<FileExtractorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileExtractorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FileExtractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
