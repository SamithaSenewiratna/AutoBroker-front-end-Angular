import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageTopUpRequestComponent } from './admin-manage-top-up-request.component';

describe('AdminManageTopUpRequestComponent', () => {
  let component: AdminManageTopUpRequestComponent;
  let fixture: ComponentFixture<AdminManageTopUpRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminManageTopUpRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminManageTopUpRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
