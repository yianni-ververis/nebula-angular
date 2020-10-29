import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MekkochartComponent } from './mekkochart.component';

describe('MekkochartComponent', () => {
  let component: MekkochartComponent;
  let fixture: ComponentFixture<MekkochartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MekkochartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MekkochartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
