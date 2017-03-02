import 'rxjs/add/operator/switchMap';

import { Component , Input, OnInit}   	from '@angular/core';
import { Location }           			from '@angular/common';
import { ActivatedRoute, Params }   	from '@angular/router';

import { Hero } 			  			from './Hero';
import { HeroService } 					from './hero.service';

@Component({
	moduleId : module.id,
	selector : 'my-hero-detail',
	templateUrl: './hero-detail.component.html',
})

export class  HeroDetailComponent implements OnInit{
	@Input()
	hero : Hero;
	
	constructor(
		  private heroService: HeroService,
		  private route: ActivatedRoute,
		  private location: Location,
	){}
	
	ngOnInit() : void {
		 this.route.params.switchMap((params: Params) => this.heroService.getHero(+params['id'])).subscribe(hero => this.hero = hero);
	}
	goBack(): void {
		this.location.back();
	}
	save(): void {
		this.heroService.update(this.hero)
			.then(() => this.goBack());
	}
}