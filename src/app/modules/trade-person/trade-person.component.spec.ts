import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradePersonComponent } from './trade-person.component';

describe('TradePersonComponent', () => {
  let component: TradePersonComponent;
  let fixture: ComponentFixture<TradePersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradePersonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TradePersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
