import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageaddsComponent } from './admin-manageadds.component';

describe('AdminManageaddsComponent', () => {
  let component: AdminManageaddsComponent;
  let fixture: ComponentFixture<AdminManageaddsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminManageaddsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminManageaddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
