import { Component } from 'angular2/core';
import { OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
	selector: 'my-heroes',
  directives: [HeroDetailComponent],
	templateUrl: 'app/heroes.component.html',
	styleUrls: ['app/heroes.component.css']
})

export class HeroesComponent implements OnInit{
	title = 'Tour of Heroes';
	selectedHero: Hero;
	heroes:  Hero[];

  ngOnInit() {
    this.getHeroes();
  }

  constructor(private _router: Router,private _heroService: HeroService) { }

  getHeroes() {
    // this.heroes = this._heroService.getHeroes(); before having a Promise
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

	onSelect(hero: Hero) {
		this.selectedHero = hero;	
	}

  gotoDetail() {
    this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }
}
