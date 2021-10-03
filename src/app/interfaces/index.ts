export interface BaseData {
  name: string;
  patronus: number;
  yearOfBirth: number;
  image: string;
}

export interface Character extends BaseData {}

export interface Student extends BaseData {}

export interface Teacher extends BaseData {}
