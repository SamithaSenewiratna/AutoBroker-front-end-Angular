import { Component } from '@angular/core';
import { AdminSideBarComponent } from "../admin-side-bar/admin-side-bar.component";
import { FooterComponent } from "../../../common/footer/footer.component";

@Component({
  selector: 'app-admin-manage-users',
  imports: [AdminSideBarComponent, FooterComponent],
  templateUrl: './admin-manage-users.component.html',
  styleUrl: './admin-manage-users.component.css'
})
export class AdminManageUsersComponent {

}
