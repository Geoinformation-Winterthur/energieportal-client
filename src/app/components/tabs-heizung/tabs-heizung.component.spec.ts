import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsHeizungComponent } from './tabs-heizung.component';

describe('TabsHeizungComponent', () => {
  let component: TabsHeizungComponent;
  let fixture: ComponentFixture<TabsHeizungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsHeizungComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabsHeizungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
