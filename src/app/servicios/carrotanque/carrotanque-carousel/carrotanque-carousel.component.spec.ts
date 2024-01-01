import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrotanqueCarouselComponent } from './carrotanque-carousel.component';

describe('CarrotanqueCarouselComponent', () => {
  let component: CarrotanqueCarouselComponent;
  let fixture: ComponentFixture<CarrotanqueCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrotanqueCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarrotanqueCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
