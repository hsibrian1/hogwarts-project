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

const ELEMENT_DATA: BaseData[] = [
  { patronus: 1, name: 'Hydrogen', yearOfBirth: 1.0079, image: 'H' },
  { patronus: 2, name: 'Helium', yearOfBirth: 4.0026, image: 'He' },
  { patronus: 3, name: 'Lithium', yearOfBirth: 6.941, image: 'Li' },
  { patronus: 4, name: 'Beryllium', yearOfBirth: 9.0122, image: 'Be' },
  { patronus: 5, name: 'Boron', yearOfBirth: 10.811, image: 'B' },
  { patronus: 6, name: 'Carbon', yearOfBirth: 12.0107, image: 'C' },
  { patronus: 7, name: 'Nitrogen', yearOfBirth: 14.0067, image: 'N' },
  { patronus: 8, name: 'Oxygen', yearOfBirth: 15.9994, image: 'O' },
  { patronus: 9, name: 'Fluorine', yearOfBirth: 18.9984, image: 'F' },
  { patronus: 10, name: 'Neon', yearOfBirth: 20.1797, image: 'Ne' },
];

@Component({
  selector: 'app-table-hogwarts',
  templateUrl: './table-hogwarts.component.html',
  styleUrls: ['./table-hogwarts.component.css'],
})
export class TableHogwartsComponent implements OnInit, AfterViewInit, OnChanges {
  constructor() {}

  ngOnInit(): void {}
  
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @Input() displayedColumns: string[] = ['name', 'patronus', 'yearOfBirth', 'image',];
  @Input() data = ELEMENT_DATA
  dataSource = new MatTableDataSource(this.data);

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(change: SimpleChanges): void {
    console.log(change)
    this.dataSource = new MatTableDataSource(change.data.currentValue)
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
