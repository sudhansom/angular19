import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordItemComponent } from './dashbord-item.component';

describe('DashbordItemComponent', () => {
  let component: DashbordItemComponent;
  let fixture: ComponentFixture<DashbordItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashbordItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbordItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
