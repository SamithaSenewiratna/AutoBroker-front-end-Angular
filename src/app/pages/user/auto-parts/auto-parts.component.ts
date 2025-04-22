import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../common/navbar/navbar.component';
import { FooterComponent } from "../../../common/footer/footer.component";
import { CommonModule } from '@angular/common';

interface Advertisement {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  more?: string;
  location?: string;
  year?: string;
  condition?: string;
  images: string[]; // Properly typed as string array
}


@Component({
  selector: 'app-auto-parts',
  imports: [NavbarComponent, FooterComponent,CommonModule],
  templateUrl: './auto-parts.component.html',
  styleUrl: './auto-parts.component.css'
})
export class AutoPartsComponent implements OnInit {

  activeSlideIndex: number = 0;

  advertisements: Advertisement[] = [
    {
      id: 1,
      title: 'Toyota Aqua Engine ',
      description: 'Description for Ad 1',
      price: 100,
      imageUrl: 'https://easycars.jp/wp-content/uploads/2021/07/15THS2.jpg',
      more: 'Extra details about Ad 1',
      images: [
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjnzOvtZDkp6eQJJdMFcHgfdkpfFN3FIFsq0ftVhfYQw9drClnoMyUJzzjrt9PkbydXpMGJx5kJe17x9-MUK4-bY4K9ehyRzKaVOzewapkHxkehyMhEVFYykQXMY-2PvH0fcB9eHlkLjrU/s1600/aqua12.jpg',
        'https://blog.sbtjapan.com/wp-content/uploads/2023/07/toyota-aqua-1.png',
        'https://www.kingxtremeracing.com/wp-content/uploads/2023/07/Toyota-Hybrid-aqua-2021-9-640x466.jpg'
      ]
    },
    {
      id: 2,
      title: 'KDH 200 Door',
      description: 'Description for Ad 2',
      price: 200,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxBvf97YzbsMmdnBVTe1giOHme6eP-Os0svA&s',
      more: 'Extra details about Ad 2',
      images: [
        'https://i.ikman-st.com/toyota-kdh-back-door-for-sale-colombo/041ee451-e09c-409c-813a-9d935a05c73b/1200/630/fitted.jpg',
        'https://image-cdn.beforward.jp/autoparts/original/201706/1324948/PA01400502_d24177.jpg',

      ]
    },
    {
      id: 3,
      title: 'Honda Vezel Dual Clutch',
      description: 'Description for Ad 3',
      price: 300,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2SxCCrYKH5GJHLutvWbkOPt3sgtgIwuv6Jg&s',
      more: 'Extra details about Ad 3',
      images: [
        'https://www.fixmycar.pk/wp-content/uploads/2021/11/Honda-Dual-Clutch-2-225x300.jpeg',
        'https://media.karousell.com/media/photos/products/2023/5/6/honda_dual_clutch_japan_import_1683338502_27e62be1_progressive.jpg',
      ]
    },
     
    {
      id: 4,
      title: 'Honda Fit AC Compressor',
      description: 'Description for Ad 3',
      price: 300,
      imageUrl: 'https://image-cdn.beforward.jp/autoparts/original/201801/1669859/PA01720444_4bbbcd.jpg',
      more: 'Extra details about Ad 3',
      images: [
        'https://image-cdn.beforward.jp/autoparts/original/202203/44888194/PA43759994_a8da53.jpg',
        'https://image-cdn.beforward.jp/autoparts/original/202503/113946078/PA112299231_e0af72.jpg',
      ]
    },
    {
      id: 5,
      title: 'BMW X3 Side Mirror',
      description: 'Description for Ad 3',
      price: 300,
      imageUrl: 'https://photos.gpa26.com/photos/pieces/thumbnails/252275_15i1.jpg',
      more: 'Extra details about Ad 3',
      images: [
        'https://www.gpa26.com/3592967-medium_default/right-wing-mirror-bmw-x3-ii-ph1-51167264114-k1-7561h.jpg',
        'https://m.media-amazon.com/images/I/61SFf3dWozL._AC_UF350,350_QL80_.jpg',
        
      ]
    },




  ];

  selectedAd: Advertisement | null = null;

  constructor() {}

  ngOnInit(): void {}

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
