import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitemuleComponent } from './sitemule.component';

describe('SitemuleComponent', () => {
  let component: SitemuleComponent;
  let fixture: ComponentFixture<SitemuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SitemuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SitemuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
