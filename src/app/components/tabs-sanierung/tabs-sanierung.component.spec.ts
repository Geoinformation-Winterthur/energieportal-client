import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsSanierungComponent } from './tabs-sanierung.component';

describe('TabsSanierungComponent', () => {
  let component: TabsSanierungComponent;
  let fixture: ComponentFixture<TabsSanierungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsSanierungComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabsSanierungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
