import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegiistorUserComponent } from './regiistor-user.component';

describe('RegiistorUserComponent', () => {
  let component: RegiistorUserComponent;
  let fixture: ComponentFixture<RegiistorUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegiistorUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegiistorUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
