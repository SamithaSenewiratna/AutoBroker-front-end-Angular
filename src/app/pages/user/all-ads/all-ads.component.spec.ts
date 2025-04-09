import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAdsComponent } from './all-ads.component';

describe('AllAdsComponent', () => {
  let component: AllAdsComponent;
  let fixture: ComponentFixture<AllAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllAdsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
