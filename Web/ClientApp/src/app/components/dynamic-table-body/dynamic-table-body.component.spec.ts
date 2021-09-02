import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTableBodyComponent } from './dynamic-table-body.component';

describe('DynamicTableBodyComponent', () => {
  let component: DynamicTableBodyComponent;
  let fixture: ComponentFixture<DynamicTableBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicTableBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicTableBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
