import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSideBarComponent } from './admin-side-bar.component';

describe('AdminSideBarComponent', () => {
  let component: AdminSideBarComponent;
  let fixture: ComponentFixture<AdminSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminSideBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
