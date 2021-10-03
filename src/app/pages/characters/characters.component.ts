import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  charactersData: Character[] = [];

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.charactersService
      .list('slytherin')
      .subscribe((respData: Character[]) => {
        this.charactersData = respData;
      });
  }
}
