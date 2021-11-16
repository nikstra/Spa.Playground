import { Component, Input, OnInit } from '@angular/core';
import { ITableData } from '../dynamic-table/dynamic-table.component';

@Component({
  selector: '[app-dynamic-table-body]',
  templateUrl: './dynamic-table-body.component.html',
  styleUrls: ['./dynamic-table-body.component.css']
})
export class DynamicTableBodyComponent implements OnInit {

  @Input() tableData: ITableData;

  constructor() {}

  ngOnInit(): void {
  }

}