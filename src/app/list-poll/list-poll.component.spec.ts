import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPollComponent } from './list-poll.component';

describe('ListPollComponent', () => {
  let component: ListPollComponent;
  let fixture: ComponentFixture<ListPollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
