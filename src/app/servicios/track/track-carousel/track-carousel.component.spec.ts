import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackCarouselComponent } from './track-carousel.component';

describe('TrackCarouselComponent', () => {
  let component: TrackCarouselComponent;
  let fixture: ComponentFixture<TrackCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrackCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
