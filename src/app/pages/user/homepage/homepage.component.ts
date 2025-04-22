import { Component } from '@angular/core';
import { NavbarComponent } from '../../../common/navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { FooterComponent } from "../../../common/footer/footer.component";

@Component({
  selector: 'app-homepage',
  imports: [NavbarComponent, RouterLink, FooterComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
