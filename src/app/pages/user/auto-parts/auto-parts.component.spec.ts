import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoPartsComponent } from './auto-parts.component';

describe('AutoPartsComponent', () => {
  let component: AutoPartsComponent;
  let fixture: ComponentFixture<AutoPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoPartsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
