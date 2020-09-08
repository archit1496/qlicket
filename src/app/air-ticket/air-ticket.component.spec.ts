import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirTicketComponent } from './air-ticket.component';

describe('AirTicketComponent', () => {
  let component: AirTicketComponent;
  let fixture: ComponentFixture<AirTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
