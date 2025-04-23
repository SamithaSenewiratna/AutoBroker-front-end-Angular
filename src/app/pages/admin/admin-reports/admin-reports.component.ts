import { Component } from '@angular/core';
import { FooterComponent } from "../../../common/footer/footer.component";
import { NavbarComponent } from "../../../common/navbar/navbar.component";
import { AdminSideBarComponent } from "../admin-side-bar/admin-side-bar.component";

@Component({
  selector: 'app-admin-reports',
  imports: [FooterComponent, NavbarComponent, AdminSideBarComponent],
  templateUrl: './admin-reports.component.html',
  styleUrl: './admin-reports.component.css'
})
export class AdminReportsComponent {

}
