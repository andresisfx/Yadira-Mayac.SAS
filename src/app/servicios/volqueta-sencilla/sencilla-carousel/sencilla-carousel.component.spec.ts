import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SencillaCarouselComponent } from './sencilla-carousel.component';

describe('SencillaCarouselComponent', () => {
  let component: SencillaCarouselComponent;
  let fixture: ComponentFixture<SencillaCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SencillaCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SencillaCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
