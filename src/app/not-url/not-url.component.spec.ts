import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotUrlComponent } from './not-url.component';

describe('NotUrlComponent', () => {
  let component: NotUrlComponent;
  let fixture: ComponentFixture<NotUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
