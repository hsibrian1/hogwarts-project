import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableHogwartsComponent } from 'src/app/components/table-hogwarts/table-hogwarts.component';
import { NewStudentsService } from 'src/app/services/new-students.service';

import { NewStudentsComponent } from './new-students.component';

describe('NewStudentsComponent', () => {
  let component: NewStudentsComponent;
  let fixture: ComponentFixture<NewStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewStudentsComponent, TableHogwartsComponent],
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        FormsModule,
        MatCardModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule,
      ],
      providers: [NewStudentsService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
