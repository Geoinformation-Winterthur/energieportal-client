import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeineLiegenschaftComponent } from './meine-liegenschaft.component';

describe('MeineLiegenschaftComponent', () => {
  let component: MeineLiegenschaftComponent;
  let fixture: ComponentFixture<MeineLiegenschaftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeineLiegenschaftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeineLiegenschaftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
