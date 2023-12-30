import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrotanqueComponent } from './carrotanque.component';

describe('CarrotanqueComponent', () => {
  let component: CarrotanqueComponent;
  let fixture: ComponentFixture<CarrotanqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrotanqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarrotanqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
