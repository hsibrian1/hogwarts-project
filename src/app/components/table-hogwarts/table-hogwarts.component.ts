import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { BaseData } from 'src/app/interfaces';

@Component({
  selector: 'app-table-hogwarts',
  templateUrl: './table-hogwarts.component.html',
  styleUrls: ['./table-hogwarts.component.css'],
})
export class TableHogwartsComponent implements OnInit, AfterViewInit, OnChanges {
  constructor() {}

  ngOnInit(): void {}

  defaultText = '-';
  filterValue = '';
  
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @Input() displayedColumns: string[] = ['name', 'patronus', 'age', 'image',];
  @Input() data: BaseData[] = []
  dataSource = new MatTableDataSource(this.data);

  ngAfterViewInit(): void {
    this.initSortAndPaginator()
    this.applyFilter()
  }

  ngOnChanges(change: SimpleChanges): void {
    this.dataSource = new MatTableDataSource(change.data.currentValue)
    this.initSortAndPaginator()
    this.applyFilter()
  }

  initSortAndPaginator(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(): void {
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
  }
}
