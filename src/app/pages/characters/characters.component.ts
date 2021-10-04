import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces';
import { CharactersService } from 'src/app/services/characters.service';

interface House {
  value: string;
  viewValue: string;
}

const HOUSES = [
  { value: 'slytherin', viewValue: 'Slytherin' },
  { value: 'gryffindor', viewValue: 'Gryffindor' },
  { value: 'ravenclaw', viewValue: 'Ravenclaw' },
  { value: 'hufflepuff', viewValue: 'Hufflepuff' },
];

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  charactersData: Character[] = [];
  houses: House[] = [...HOUSES];

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.handleChange('slytherin');
  }

  handleChange(house: string): void {
    this.charactersService.list(house).subscribe((respData: Character[]) => {
      this.charactersData = respData;
    });
  }
}
