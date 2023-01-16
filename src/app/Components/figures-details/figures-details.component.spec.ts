import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiguresDetailsComponent } from './figures-details.component';

describe('FiguresDetailsComponent', () => {
  let component: FiguresDetailsComponent;
  let fixture: ComponentFixture<FiguresDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiguresDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiguresDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
