import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-create-ad',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterLink],
  templateUrl: './create-ad.component.html',
  styleUrl: './create-ad.component.css'
})
export class CreateAdComponent  {

  defaultMainImage: string = 'https://www.shutterstock.com/image-vector/upload-add-picture-jpg-file-600nw-1975494812.jpg';
  mainImagePreview: string = '';
  
  triggerMainImageInput() {
    const input = document.getElementById('mainImageInput') as HTMLInputElement;
    if (input) input.click();
  }
  
  onMainImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.mainImagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
  
 

  defaultImage: string =
    'https://www.shutterstock.com/image-vector/upload-add-picture-jpg-file-600nw-1975494812.jpg';

  imagePreviews: string[] = ['', '', '','']; // Limit to 3

  // Open the hidden file input for a specific index
  triggerFileInput(index: number) {
    const fileInput = document.getElementById('fileInput' + index) as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  }

  // Handle change for a single image slot
  onSingleFileChange(event: Event, index: number) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreviews[index] = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  // Optional: For uploading multiple files from the file input below
  onMultipleFilesChange(event: Event) {
    const files = (event.target as HTMLInputElement).files;
    if (files) {
      this.imagePreviews = [];
      for (let i = 0; i < Math.min(files.length, 5); i++) {
        const reader = new FileReader();
        reader.onload = () => {
          this.imagePreviews[i] = reader.result as string;
        };
        reader.readAsDataURL(files[i]);
      }
    }
  }




}
