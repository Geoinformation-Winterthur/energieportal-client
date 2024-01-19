import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkalaComponent } from './skala.component';

describe('SkalaComponent', () => {
  let component: SkalaComponent;
  let fixture: ComponentFixture<SkalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkalaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
