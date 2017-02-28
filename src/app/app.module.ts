import { NgModule }      		from '@angular/core';
import { BrowserModule } 		from '@angular/platform-browser';
import { FormsModule }   		from '@angular/forms';
import { AppComponent }  		from './app.component';
import { RouterModule }   		from '@angular/router';

import { HeroDetailComponent } 	from './hero-detail.component';
import { HeroesComponent }     	from './heroes.component';
import { DashboardComponent } 	from './dashboard.component'
import { HeroService }         	from './hero.service';


@NgModule({
  imports:      
	[ 
		BrowserModule ,
		FormsModule,
		RouterModule.forRoot([
		   {
			path: '',
			redirectTo: '/dashboard',
			pathMatch: 'full'
		  }, 
		  {
			path: 'dashboard',
			component: DashboardComponent
		  }, 
		  {
			path: 'heroes',
			component: HeroesComponent
		  }
		])
	],
  declarations: 
	[ 
		AppComponent,
		HeroDetailComponent, 
		HeroesComponent,
		DashboardComponent		
	],
  providers: [
    HeroService
    ],
  bootstrap:    
	[ 
		AppComponent 
	],

})

export class AppModule { }
