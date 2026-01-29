import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachUserComponent } from './each-user.component';

describe('EachUserComponent', () => {
  let component: EachUserComponent;
  let fixture: ComponentFixture<EachUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EachUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EachUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
