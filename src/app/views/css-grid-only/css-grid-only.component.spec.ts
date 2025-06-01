import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssGridOnlyComponent } from './css-grid-only.component';

describe('CssGridOnlyComponent', () => {
  let component: CssGridOnlyComponent;
  let fixture: ComponentFixture<CssGridOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssGridOnlyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssGridOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
