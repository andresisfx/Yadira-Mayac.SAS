import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolquetaDobleComponent } from './volqueta-doble.component';

describe('VolquetaDobleComponent', () => {
  let component: VolquetaDobleComponent;
  let fixture: ComponentFixture<VolquetaDobleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolquetaDobleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VolquetaDobleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
