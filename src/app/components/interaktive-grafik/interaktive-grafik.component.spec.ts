import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteraktiveGrafikComponent } from './interaktive-grafik.component';

describe('InteraktiveGrafikComponent', () => {
  let component: InteraktiveGrafikComponent;
  let fixture: ComponentFixture<InteraktiveGrafikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteraktiveGrafikComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InteraktiveGrafikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
