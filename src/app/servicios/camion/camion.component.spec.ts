import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamionComponent } from './camion.component';

describe('CamionComponent', () => {
  let component: CamionComponent;
  let fixture: ComponentFixture<CamionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CamionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CamionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
