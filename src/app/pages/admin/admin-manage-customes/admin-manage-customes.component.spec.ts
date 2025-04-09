import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageCustomesComponent } from './admin-manage-customes.component';

describe('AdminManageCustomesComponent', () => {
  let component: AdminManageCustomesComponent;
  let fixture: ComponentFixture<AdminManageCustomesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminManageCustomesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminManageCustomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
