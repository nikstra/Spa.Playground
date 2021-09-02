import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTableHeadComponent } from './dynamic-table-head.component';

describe('DynamicTableHeadComponent', () => {
  let component: DynamicTableHeadComponent;
  let fixture: ComponentFixture<DynamicTableHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicTableHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicTableHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
