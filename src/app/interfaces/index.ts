export interface BaseData {
  name: string;
  patronus: number;
  age: number;
  image: string;
  dateOfBirth: string;
}

export interface Character extends BaseData {}

export interface Student extends BaseData {}

export interface Teacher extends BaseData {}
