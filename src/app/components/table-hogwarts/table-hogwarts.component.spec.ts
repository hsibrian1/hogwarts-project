import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHogwartsComponent } from './table-hogwarts.component';

describe('TableHogwartsComponent', () => {
  let component: TableHogwartsComponent;
  let fixture: ComponentFixture<TableHogwartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableHogwartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableHogwartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
