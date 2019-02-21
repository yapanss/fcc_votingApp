import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPollComponent } from './detail-poll.component';

describe('DetailPollComponent', () => {
  let component: DetailPollComponent;
  let fixture: ComponentFixture<DetailPollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
