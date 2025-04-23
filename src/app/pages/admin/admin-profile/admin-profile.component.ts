import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminSideBarComponent } from "../admin-side-bar/admin-side-bar.component";

@Component({
  selector: 'app-admin-profile',
  imports: [CommonModule, FormsModule, AdminSideBarComponent],
  templateUrl: './admin-profile.component.html',
  styleUrl: './admin-profile.component.css'
})
export class AdminProfileComponent {
  profile = {
    username: 'admin123',
    email: 'admin@example.com',
    role: 'Administrator',
    lastLogin: '2025-04-22 14:32:10'
  };

  isEditing: boolean = false;
  backupEmail = this.profile.email;

  passwords = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  };

  updatePassword() {
    const { oldPassword, newPassword, confirmPassword } = this.passwords;

    if (!oldPassword || !newPassword || !confirmPassword) {
      alert('Please fill in all password fields.');
      return;
    }

    if (newPassword !== confirmPassword) {
      alert('New passwords do not match.');
      return;
    }

    alert('Password updated locally!');
    this.passwords = { oldPassword: '', newPassword: '', confirmPassword: '' };
  }

  editProfile() {
    if (!this.isEditing) {
      this.isEditing = true; // Enable editing
    } else {
      if (!this.profile.email.trim()) {
        alert('Email cannot be empty.');
        return;
      }

      this.isEditing = false;
      alert('Profile updated locally!');
    }
  }

  deleteProfile() {
    const confirmed = confirm('Are you sure you want to delete this profile?');

    if (confirmed) {
      this.profile = {
        username: '',
        email: '',
        role: '',
        lastLogin: ''
      };
      alert('Profile deleted locally.');
    }
  }
}
