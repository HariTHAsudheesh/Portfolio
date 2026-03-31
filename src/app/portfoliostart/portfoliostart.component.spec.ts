import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliostartComponent } from './portfoliostart.component';

describe('PortfoliostartComponent', () => {
  let component: PortfoliostartComponent;
  let fixture: ComponentFixture<PortfoliostartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfoliostartComponent]
    });
    fixture = TestBed.createComponent(PortfoliostartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
