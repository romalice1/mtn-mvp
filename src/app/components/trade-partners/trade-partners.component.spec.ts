import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradePartnersComponent } from './trade-partners.component';

describe('TradePartnersComponent', () => {
  let component: TradePartnersComponent;
  let fixture: ComponentFixture<TradePartnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradePartnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradePartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
