import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallerCarouselComponent } from './taller-carousel.component';

describe('TallerCarouselComponent', () => {
  let component: TallerCarouselComponent;
  let fixture: ComponentFixture<TallerCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallerCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TallerCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
