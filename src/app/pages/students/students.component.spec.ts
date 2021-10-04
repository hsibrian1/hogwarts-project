import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableHogwartsComponent } from 'src/app/components/table-hogwarts/table-hogwarts.component';
import { StudentsService } from 'src/app/services/students.service';

import { StudentsComponent } from './students.component';

describe('StudentsComponent', () => {
  let component: StudentsComponent;
  let fixture: ComponentFixture<StudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentsComponent, TableHogwartsComponent],
      imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatCardModule,
        BrowserDynamicTestingModule,
        MatFormFieldModule,
        MatInputModule,
      ],
      providers: [StudentsService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
