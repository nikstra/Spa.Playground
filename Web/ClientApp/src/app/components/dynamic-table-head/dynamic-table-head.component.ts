import { Component, Input, OnInit } from '@angular/core';

@Component({
  /* eslint-disable-next-line */
  selector: '[app-dynamic-table-head]',
  templateUrl: './dynamic-table-head.component.html',
  styleUrls: ['./dynamic-table-head.component.css']
})
export class DynamicTableHeadComponent implements OnInit {
  @Input() columnHeaders: any[];

  constructor() {}

  ngOnInit(): void {
  }
}
