export interface BaseData {
  name: string;
  patronus: string;
  age: number;
  image: string;
  dateOfBirth?: string;
  yearOfBirth?: number;
}

export interface Character extends BaseData {}

export interface Student extends BaseData {}

export interface Teacher extends BaseData {}

export interface HogwartsTableHeader {
  columnDef: string;
  header: string;
  textField: string;
}

