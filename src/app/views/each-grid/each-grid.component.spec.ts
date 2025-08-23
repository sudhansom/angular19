import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachGridComponent } from './each-grid.component';

describe('EachGridComponent', () => {
  let component: EachGridComponent;
  let fixture: ComponentFixture<EachGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EachGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EachGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
