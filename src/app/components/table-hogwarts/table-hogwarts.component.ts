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
import { MatPaginator } from '@angular/material/paginator';
import { BaseData, HogwartsTableHeader } from 'src/app/interfaces';

@Component({
  selector: 'app-table-hogwarts',
  templateUrl: './table-hogwarts.component.html',
  styleUrls: ['./table-hogwarts.component.css'],
})
export class TableHogwartsComponent
  implements OnInit, AfterViewInit, OnChanges
{
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @Input() columns: HogwartsTableHeader[] = [
    {
      columnDef: 'name',
      header: 'Nombre',
      textField: 'name',
    },
    {
      columnDef: 'patronus',
      header: 'Patronus',
      textField: 'patronus',
    },
    {
      columnDef: 'age',
      header: 'Edad',
      textField: 'age',
    },
    {
      columnDef: 'image',
      header: 'Foto',
      textField: 'image',
    },
  ];
  @Input() displayedColumns: string[] = ['name', 'patronus', 'age', 'image'];
  @Input() data: BaseData[] = [];

  dataSource = new MatTableDataSource(this.data || []);
  defaultText = '-';
  filterValue = '';

  constructor() {}

  ngOnInit(): void {
    console.log(this.data);
  }

  ngAfterViewInit(): void {
    try {
      this.initSortAndPaginator();
      this.applyFilter();
    } catch (error) {
      console.error('From ngAfterViewInit', error);
    }
  }

  ngOnChanges(change: SimpleChanges): void {
    this.dataSource = new MatTableDataSource(change.data.currentValue);
    this.initSortAndPaginator();
    this.applyFilter();
  }
  /**
   * @function initSortAndPaginator
   * Inicializa el sort y el paginator del MatTableDataSource
   */
  initSortAndPaginator(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(): void {
    try {
      if (this.filterValue || this.filterValue === '') {
        this.dataSource.filter = this.filterValue.trim().toLowerCase();
      }
    } catch (error) {
      console.error('From applyFilters', error);
    }
  }
}
