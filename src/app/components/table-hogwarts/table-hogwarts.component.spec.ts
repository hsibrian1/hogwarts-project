import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelect } from '@angular/material/select';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { TableHogwartsComponent } from './table-hogwarts.component';

describe('TableHogwartsComponent', () => {
  let component: TableHogwartsComponent;
  let fixture: ComponentFixture<TableHogwartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableHogwartsComponent, MatError, MatSelect],
      imports: [
        NoopAnimationsModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        ReactiveFormsModule,
        FormsModule,
        MatCardModule,
        BrowserDynamicTestingModule,
        MatFormFieldModule,
        MatInputModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableHogwartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Check the ordering', () => {
    fixture.detectChanges();

    const sort = component.dataSource.sort;
    expect(sort).toBeInstanceOf(MatSort);
  });
});
