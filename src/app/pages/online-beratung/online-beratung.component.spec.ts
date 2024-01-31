import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineBeratungComponent } from './online-beratung.component';

describe('OnlineBeratungComponent', () => {
  let component: OnlineBeratungComponent;
  let fixture: ComponentFixture<OnlineBeratungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlineBeratungComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnlineBeratungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
