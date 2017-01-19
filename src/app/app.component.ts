import { Component } from '@angular/core';

//Creating a class for the hero so it may become a two way data binding. Before
//the hero name was defined within the AppComponent class, but this does not allow
//for two way data binding meaning this variable can only be changed from the back
//end.
export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  {id: 1, name: 'Colossus'},
  {id: 2, name: 'Riel'},
  {id: 3, name: 'Gailwin'},
  {id: 4, name: 'Manda'},
  {id: 5, name: 'Babypunter'}
];



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tour of Heroes!';
  heroes = HEROES;

  selectedHero: Hero;


  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
  //Creating a property using the hero class. The variable hero is created and is assigned
  //the class Hero. With this class assigned, hero is now looking for two variables of
  //certain data types. Number & String.

  /*When assigning a class, make sure to use keyword 'let'. This allows the variable to be
  given the class
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };*/

}
