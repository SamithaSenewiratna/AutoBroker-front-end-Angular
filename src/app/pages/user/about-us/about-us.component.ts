import { Component } from '@angular/core';
import { NavbarComponent } from '../../../common/navbar/navbar.component';
import { FooterComponent } from "../../../common/footer/footer.component";

@Component({
  selector: 'app-about-us',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
