import { Component, OnInit } from '@angular/core';
//Calls to the hero class created. The class has the properties of id and name.
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

//import { AppRoutingModule } from './app-routing/app-routing.module';

@Component({
  selector: 'app-heroes',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})

//Creates a hero property with the type of Hero. This allows us to add in the name/id as
//they are defined within the class.
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private router: Router){ }

  getHeroes(): void{
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void{
    this.getHeroes();
  }

  onSelect(hero: Hero):void{
    this.selectedHero = hero;
  }

  gotoDetail(): void{
    this.router.navigate(['/details', this.selectedHero.id]);
  }
}
