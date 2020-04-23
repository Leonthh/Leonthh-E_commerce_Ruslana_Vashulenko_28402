import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpanelTopComponent } from './spanel-top.component';

describe('SpanelTopComponent', () => {
  let component: SpanelTopComponent;
  let fixture: ComponentFixture<SpanelTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpanelTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpanelTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
