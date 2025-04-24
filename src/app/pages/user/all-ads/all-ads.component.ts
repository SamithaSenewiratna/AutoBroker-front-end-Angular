import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../common/navbar/navbar.component';
import { FooterComponent } from '../../../common/footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Advertisement {
  id: number;
  brand?: string;
  model?: string;
  title: string;
  description: string;
  price: number;
  imageUrl?: string;
  location?: string;
  year?: string;
  fualType?: string;
  transmission?: string;
  EngineCapacity?: string;
  condition?: string;
  mileage?: string;
  contact?: string;
  createdAt?: string;
  images: string[]; 
}

@Component({
  selector: 'app-all-ads',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule, RouterLink] ,
  templateUrl: './all-ads.component.html',
  styleUrls: ['./all-ads.component.css']
})
export class AllAdsComponent implements OnInit {
 
 

  toggleModel() {
    const modal = document.getElementById('topUpModal');
    if (modal?.classList.contains('hidden')) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    } else {
      modal?.classList.add('hidden');
      modal?.classList.remove('flex');
    }
  }

   
  

  toggleHowToUseModal() {
    const modal = document.getElementById('howToUseModal');
    if (modal?.classList.contains('hidden')) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    } else {
      modal?.classList.add('hidden');
      modal?.classList.remove('flex');
    }
  }



  toggleLogoutModal() {
    const modal = document.getElementById('logoutModal');
    if (modal?.classList.contains('hidden')) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    } else {
      modal?.classList.add('hidden');
      modal?.classList.remove('flex');
    }
  }
  
  confirmLogout(): void {
   window.location.href = '/loginUser'; /
  }
  



  activeSlideIndex: number = 0;

  advertisements: Advertisement[] = [
    {
      id: 1,
      title: 'Cadillac Esscalade ESV RWD',
      brand: 'Cadillac',
      model: 'Escalade ESV RWD',
      location: 'Gampaha',
      year: '2024',
      condition: 'New',
      fualType: 'Petrol',
      transmission: 'Automatic',
      EngineCapacity: '6.2L',
      mileage: '220 km',
      contact: '077 123 4567',
      createdAt: '2024-03-01',


      description: 'hodatama tyenawa hoda ad ekak',
      price: 3040000,
     
     
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsmsbgz-D8WYKzMAkvObrJUJU47m206fw0Ag&s',
        'https://static0.carbuzzimages.com/wordpress/wp-content/uploads/2024/03/764777-33.jpg',
        'https://www.autotrader.ca/editorial/media/yldirban/2023-cadillac-escalade-esv-sport-platinum-td-230920-04-jm.jpg?rxy=0.49998311614803764,0.60105430986241626&width=1920&height=1080&v=1d9e81902f9ebe0',
        'https://autoimage.capitalone.com/dealer/2024-Cadillac-Escalade_ESV-Sport_Platinum-1GYS4RKL9RR143007-vauto_1GYS4RKL9RR143007_33258-fbda5e9dc1fef6b532099fb91628b239.jpg?width=640&height=480'
      ]
    },
    {
      id: 2,
      title: 'Kia Sportage',
      brand: 'Kia',
      model: 'Sportage',
      location: 'Embilipitiya',
      year: '2024', 
      fualType: 'Petrol',
      transmission: 'Automatic',
      EngineCapacity: '2.5L',
      mileage: '150 km',
      contact: '077 123 4567',
      createdAt: '2024-03-01',
      condition: 'New',
      description: 'hodatama tyenawa hoda ad ekak',
     
      price: 2130000,
      
      
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXZzsm_sliFkx4bFmLZwZY8A5EMa_KiXsvjA&s',
        'https://res.cloudinary.com/total-dealer/image/upload/w_3840,f_auto,q_75/v1/production/k1euceow4d9p1u2hml10fa6gnh2z',
        'https://images.carexpert.com.au/resize/3000/-/app/uploads/2024/03/2024-Kia_SportageHybrid_GTLine_007.jpg',
        'https://editorial.pxcrush.net/carsales/general/editorial/211210_kia_sportage_gtline_05-5grw.jpg'
      ]
    },
    {
      id: 3,
      title: 'Discover jeep 348',
      brand: 'Jeep',
      model: 'Discover 348',
      location: 'Colombo 13',
      year: '2024',
      fualType: 'Petrol',
      transmission: 'Automatic',
      EngineCapacity: '3.6L',
      mileage: '200 km',
      contact: '077 123 4567',
      createdAt: '2024-03-01',
      condition: 'New',
      description: 'hodatama tyenawa hoda ad ekak',
      price: 1200000,
    
      
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7BhaKnsHuz7CrwRWzE6ioBaAkHQQ_nQYDUQ&s',
        'https://imagecdnsa.zigwheels.ae/medium/gallery/exterior/18/1947/jeep-grand-cherokee-4xe-29624.jpg',
        'https://i0.statig.com.br/bancodeimagens/imgalta/9d/d8/st/9dd8stdeyhhj2zr2jo1skqxoa.jpg',
      ]
    },
     
    {
      id: 4,
      title: 'Chevrlot 789',
      brand: 'Chevrlot',
      model: '789',
      location: 'Anuradapura',
      year: '2024',
      fualType: 'Petrol',
      transmission: 'Automatic',
      EngineCapacity: '3.6L',
      mileage: '200 km',
      contact: '077 123 4567',
      createdAt: '2024-03-01',
      condition: 'New',
      description: 'hodatama tyenawa hoda ad ekak',
      price: 300000,
      
      
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqTznWhDK73P6MoK_vnwGfRQDkrV9z2BoMsw&s',
        'https://thumbs.dreamstime.com/b/dacia-duster-suv-car-brussels-motor-show-belgium-january-355399037.jpg',
        'https://www.lafuente.eu/upload/fotos_vehiculos/5373_1728036240.jpg',
      ]
    },
    {
      id: 5,
      title: 'Ferrari SUV',
      brand: 'Ferrari',
      model: 'Purosangue',
      location: 'Jaffna',
      year: '2024',
      fualType: 'Petrol',
      transmission: 'Automatic',
      EngineCapacity: '3.9L',
      mileage: '100 km',
      contact: '077 123 4567',
      createdAt: '2024-03-01',
      condition: 'New',
      description: 'hodatama tyenawa hoda ad ekak',
      price: 300,
      
      
      images: [
       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkCJQUKcbcP34JXoWgVq9-3tF37OV871NJyg&s',
        'https://www.granturismoevents.com/_Pages/3148/726743.jpg',
        'https://www.granturismoevents.com/_Pages/3148/Image920x600.jpg',
        'https://cdn1.smartprix.com/rx-imIacuMmt-w420-h420/ferrari-purosangue.webp'
      ]
    },



  ];

  selectedAd: Advertisement | null = null;


  constructor() {}

  ngOnInit(): void {
  }

  openAdDetails(ad: Advertisement): void {
    this.selectedAd = ad;
    this.activeSlideIndex = 0; 
  }

  closeModal(): void {
    this.selectedAd = null;
  }

  prevSlide(): void {
    if (this.selectedAd?.images?.length) {
      this.activeSlideIndex =
        (this.activeSlideIndex - 1 + this.selectedAd.images.length) %
        this.selectedAd.images.length;
    }
  }

  nextSlide(): void {
    if (this.selectedAd?.images?.length) {
      this.activeSlideIndex =
        (this.activeSlideIndex + 1) % this.selectedAd.images.length;
    }
  }

  goToSlide(index: number): void {
    this.activeSlideIndex = index;
  }
}
