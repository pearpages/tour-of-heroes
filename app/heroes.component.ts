import { Component } from 'angular2/core';
import { OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
	selector: 'my-heroes',
  directives: [HeroDetailComponent],
	template: `
	<h2>My Heroes</h2>
	<ul class="heroes">
		<li *ngFor="#hero of heroes" [class.selected]="hero === selectedHero" (click)="onSelect(hero)">
			<span class="badge">{{hero.id}}</span> {{hero.name}}
		</li>
	</ul>
  <div *ngIf="selectedHero">
  <h2>
    {{selectedHero.name | uppercase}} is my hero
  </h2>
  <button (click)="gotoDetail()">View Details</button>
</div>
  `,
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
