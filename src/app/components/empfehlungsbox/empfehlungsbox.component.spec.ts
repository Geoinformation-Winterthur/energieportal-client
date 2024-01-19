import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpfehlungsboxComponent } from './empfehlungsbox.component';

describe('EmpfehlungsboxComponent', () => {
  let component: EmpfehlungsboxComponent;
  let fixture: ComponentFixture<EmpfehlungsboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpfehlungsboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpfehlungsboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
