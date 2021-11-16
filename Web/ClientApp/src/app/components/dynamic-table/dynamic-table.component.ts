import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { defaultIfEmpty } from 'rxjs/operators';
import { DynamicDataService } from 'src/app/services/dynamic-data.service';
import { DynamicTableBodyComponent } from '../dynamic-table-body/dynamic-table-body.component';
import { DynamicTableHeadComponent } from '../dynamic-table-head/dynamic-table-head.component';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit {
  cssClasses: Map<string, string[]> = new Map([
    [ "table", ["table", "table-striped"]]
  ]);

  @ViewChild(DynamicTableHeadComponent) tableHead: DynamicTableHeadComponent;
  @ViewChild(DynamicTableBodyComponent) tableBody: DynamicTableBodyComponent;

  tableData$: Observable<ITableData> = new Observable<ITableData>()
    .pipe(defaultIfEmpty({ meta: { columns: [] }, content: [] }));

  constructor(private dynamicDataService: DynamicDataService) {
    this.tableData$.subscribe(x => console.log(x));
  }
  
  ngOnInit(): void {
    
    this.tableData$ = this.getData(0, 50);
  }

  getData(skip: number, take: number): Observable<ITableData> {

    return this.dynamicDataService.get(skip, take);
  }
}

export interface ITableData {
  meta: IMeta;
  content: Object[][];
}

export interface IMeta {
  columns: IColumnHead[];
  skip?: number;
  take?: number;
  total?: number;
}

export interface IColumnHead {
  text: string;
  type: string;
  sort?: Sort;
}

export enum Sort {
  Ascending = "ascending",
  Descending = "descending"
}
