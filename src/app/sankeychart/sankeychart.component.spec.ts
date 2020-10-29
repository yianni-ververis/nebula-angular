import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SankeychartComponent } from './sankeychart.component';

describe('SankeychartComponent', () => {
  let component: SankeychartComponent;
  let fixture: ComponentFixture<SankeychartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SankeychartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SankeychartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
