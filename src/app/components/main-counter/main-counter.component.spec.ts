import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCOunterComponent } from './main-counter.component';

describe('MainCOunterComponent', () => {
  let component: MainCOunterComponent;
  let fixture: ComponentFixture<MainCOunterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainCOunterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainCOunterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
