import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolquetaSencillaComponent } from './volqueta-sencilla.component';

describe('VolquetaSencillaComponent', () => {
  let component: VolquetaSencillaComponent;
  let fixture: ComponentFixture<VolquetaSencillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolquetaSencillaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VolquetaSencillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
