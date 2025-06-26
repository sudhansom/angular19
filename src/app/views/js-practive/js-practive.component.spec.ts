import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsPractiveComponent } from './js-practive.component';

describe('JsPractiveComponent', () => {
  let component: JsPractiveComponent;
  let fixture: ComponentFixture<JsPractiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsPractiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsPractiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
