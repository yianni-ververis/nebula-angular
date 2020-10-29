import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunnelchartComponent } from './funnelchart.component';

describe('FunnelchartComponent', () => {
  let component: FunnelchartComponent;
  let fixture: ComponentFixture<FunnelchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunnelchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunnelchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
