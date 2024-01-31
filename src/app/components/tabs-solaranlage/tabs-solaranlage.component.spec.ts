import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsSolaranlageComponent } from './tabs-solaranlage.component';

describe('TabsSolaranlageComponent', () => {
  let component: TabsSolaranlageComponent;
  let fixture: ComponentFixture<TabsSolaranlageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsSolaranlageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabsSolaranlageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
