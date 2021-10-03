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
  
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @Input() displayedColumns: string[] = ['name', 'patronus', 'age', 'image',];
  @Input() data: BaseData[] = []
  dataSource = new MatTableDataSource(this.data);

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(change: SimpleChanges): void {
    this.dataSource = new MatTableDataSource(change.data.currentValue)
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
