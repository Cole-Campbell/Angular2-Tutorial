import { Component, OnInit } from '@angular/core';
//Calls to the hero class created. The class has the properties of id and name.

@Component({
  selector: 'app-root',
  template:`
  <h1>
    {{title}}
  </h1>
  <nav>
    <a routerLink="heroes">Heroes</a>
    <a routerLink="dashboard">Dashboard</a>
  </nav>
   <router-outlet></router-outlet>`,
  styles: [`

  `]
})

//Creates a hero property with the type of Hero. This allows us to add in the name/id as
//they are defined within the class.
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';

  ngOnInit(){

  }
}
