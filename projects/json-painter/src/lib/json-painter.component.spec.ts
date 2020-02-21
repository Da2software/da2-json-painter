import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonPainterComponent } from './json-painter.component';

describe('JsonPainterComponent', () => {
  let component: JsonPainterComponent;
  let fixture: ComponentFixture<JsonPainterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonPainterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonPainterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
