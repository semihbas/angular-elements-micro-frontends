import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetClientReportsComponent } from './widget-client-reports.component';

describe('WidgetClientReportsComponent', () => {
  let component: WidgetClientReportsComponent;
  let fixture: ComponentFixture<WidgetClientReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetClientReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetClientReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
