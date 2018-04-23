import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendsComponent } from './vends.component';

describe('VendsComponent', () => {
  let component: VendsComponent;
  let fixture: ComponentFixture<VendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
