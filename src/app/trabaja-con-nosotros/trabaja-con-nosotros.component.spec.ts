import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajaConNosotrosComponent } from './trabaja-con-nosotros.component';

describe('TrabajaConNosotrosComponent', () => {
  let component: TrabajaConNosotrosComponent;
  let fixture: ComponentFixture<TrabajaConNosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrabajaConNosotrosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrabajaConNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
