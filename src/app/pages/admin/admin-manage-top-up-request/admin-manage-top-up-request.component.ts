import { Component } from '@angular/core';
import { AdminSideBarComponent } from "../admin-side-bar/admin-side-bar.component";
import { FooterComponent } from "../../../common/footer/footer.component";

@Component({
  selector: 'app-admin-manage-top-up-request',
  imports: [AdminSideBarComponent, FooterComponent],
  templateUrl: './admin-manage-top-up-request.component.html',
  styleUrl: './admin-manage-top-up-request.component.css'
})
export class AdminManageTopUpRequestComponent {

}
