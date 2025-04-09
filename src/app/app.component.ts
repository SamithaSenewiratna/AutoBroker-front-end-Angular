import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomepageComponent } from './pages/user/homepage/homepage.component';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { AllAdsComponent } from './pages/user/all-ads/all-ads.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomepageComponent,AllAdsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{
  title = 'front-end';

  ngOnInit(): void {
    initFlowbite();
  }
}
