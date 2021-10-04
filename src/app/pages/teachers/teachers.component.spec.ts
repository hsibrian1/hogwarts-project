import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { TableHogwartsComponent } from 'src/app/components/table-hogwarts/table-hogwarts.component';
import { BaseData } from 'src/app/interfaces';
import { TeachersService } from 'src/app/services/teachers.service';

import { TeachersComponent } from './teachers.component';

const N = 5;

const HEADERS = ['Nombre', 'Patronus', 'Edad', 'Foto'];

const getRandomInt = (min: number = 1, max: number = 20) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const getTestData = (n: number): BaseData[] => {
  const newArr: BaseData[] = [];
  for (let i = 0; i < n; i++) {
    newArr.push({
      name: `Example Name ${getRandomInt()}`,
      age: getRandomInt(20, 50),
      image: 'https://picsum.photos/200/300',
      patronus: `Example ${getRandomInt()} patronus (${getRandomInt()})`,
    });
  }
  return newArr;
};

const testData = getTestData(N)

class teachersServiceStub {
  list () {
    return of(testData)
  }
}

describe('TeachersComponent', () => {
  let component: TeachersComponent;
  let compiled: any;
  let teachersService: TeachersService;
  let fixture: ComponentFixture<TeachersComponent>;
  let de: DebugElement;

  const getByTestId = (testId: string) => {
    return compiled.querySelector(`[data-test-id="${testId}"]`);
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeachersComponent, TableHogwartsComponent],
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
      providers: [{ provide: TeachersService, useClass: teachersServiceStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersComponent);
    de = fixture.debugElement;
    teachersService = de.injector.get(TeachersService)
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Verify that the data is being displayed', (done) => {
    spyOn(teachersService, 'list').and.callThrough();

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const tableRows = fixture.nativeElement.querySelectorAll('tr');
      expect(tableRows[0].children.length).toBe(4);

      // Header row
      const headerRow = tableRows[0];
      expect(headerRow.cells[0].innerText.trim()).toBe(HEADERS[0]);
      expect(headerRow.cells[1].innerText.trim()).toBe(HEADERS[1]);
      expect(headerRow.cells[2].innerText.trim()).toBe(HEADERS[2]);
      expect(headerRow.cells[3].innerText.trim()).toBe(HEADERS[3]);

      // Data rows
      for (let i = 1; i < N; i++) {
        const row = tableRows[i];
        expect(row.cells[0].innerText.trim()).toBe(testData[i - 1].name);
        expect(row.cells[1].innerText.trim()).toBe(testData[i - 1].patronus);
        expect(row.cells[2].innerText.trim()).toBe(
          testData[i - 1].age.toString()
        );
        expect(row.cells[3].querySelector('img').getAttribute('src').trim()).toBe(
          testData[i - 1].image
        );
        console.log(row.cells[3].querySelector('img').getAttribute('src'))
      }

      done();
    });
  });
});
