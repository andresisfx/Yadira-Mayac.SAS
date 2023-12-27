import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallcarouselComponent } from './smallcarousel.component';

describe('SmallcarouselComponent', () => {
  let component: SmallcarouselComponent;
  let fixture: ComponentFixture<SmallcarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallcarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmallcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
