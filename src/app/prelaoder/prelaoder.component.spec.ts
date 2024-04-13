import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrelaoderComponent } from './prelaoder.component';

describe('PrelaoderComponent', () => {
  let component: PrelaoderComponent;
  let fixture: ComponentFixture<PrelaoderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrelaoderComponent]
    });
    fixture = TestBed.createComponent(PrelaoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
