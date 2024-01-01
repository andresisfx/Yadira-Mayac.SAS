import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DobleCarouselComponent } from './doble-carousel.component';

describe('DobleCarouselComponent', () => {
  let component: DobleCarouselComponent;
  let fixture: ComponentFixture<DobleCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DobleCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DobleCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
