import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

export interface Character {
  name: string;
  patronus: number;
  age: number;
  image: string;
}

const ELEMENT_DATA: Character[] = [
  { patronus: 1, name: 'Hydrogen', age: 1.0079, image: 'H' },
  { patronus: 2, name: 'Helium', age: 4.0026, image: 'He' },
  { patronus: 3, name: 'Lithium', age: 6.941, image: 'Li' },
  { patronus: 4, name: 'Beryllium', age: 9.0122, image: 'Be' },
  { patronus: 5, name: 'Boron', age: 10.811, image: 'B' },
  { patronus: 6, name: 'Carbon', age: 12.0107, image: 'C' },
  { patronus: 7, name: 'Nitrogen', age: 14.0067, image: 'N' },
  { patronus: 8, name: 'Oxygen', age: 15.9994, image: 'O' },
  { patronus: 9, name: 'Fluorine', age: 18.9984, image: 'F' },
  { patronus: 10, name: 'Neon', age: 20.1797, image: 'Ne' },
];

@Component({
  selector: 'app-table-hogwarts',
  templateUrl: './table-hogwarts.component.html',
  styleUrls: ['./table-hogwarts.component.css'],
})
export class TableHogwartsComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {}
  
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @Input() displayedColumns: string[] = ['patronus', 'name', 'age', 'image'];
  @Input() dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
