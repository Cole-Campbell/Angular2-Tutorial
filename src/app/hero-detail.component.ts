import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { HeroService } from './hero.service';
import { Hero } from './hero';
@Component({
  selector: 'app-hero-detail',
  template: `
   <div *ngIf="hero">
    <h2>
      {{hero.name}} Details!
    </h2>
    <label>id: </label>{{hero.id}}

    <label>name: </label>{{hero.name}}
      <input [(ngModel)]="hero.name" placeholder="name">
    
    <button (click)="goBack()">Back</button>

    </div>
    <br/>
    
  `,
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input()
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

}
