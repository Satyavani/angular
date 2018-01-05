# AngularTourOfHeroes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Hero Editor

* Added Hero component
* Added Hero class with id and name
* using the Hero class in template in read-only mode
* Added ngModel from FormsModule to app.module to use two-way binding for Hero name input box in template.
* Added <input [(ngModel)]> for two-way binding of the  hero.name property.

## Displaying a list
* Added mock-heroes.ts by exporting a `constant HEROES`
* Using the constant to initialize a property in heroes.component
* Using *ngFor displying the list of heroes in heroes.component.html template. Ex: `*ngFor="let hero of heroes"`
* Displying the master-detail view for heroes.  
    * Initialize the selectedHero property with `(click)` listener in heroes.component.ts.
    * Using *ngIf to check whether a hero is selected or not. Ex: `*ngIf="selectedHero"`.
* Differenciating the selected hero with a different css class using class binding. `[class.selected]="hero === selectedHero"`.

## Seperating Detail view into a new component

* Created a new HeroDetailComponent
* HeroDetailComponent is responsible for displaying details for a `given/input hero`.
* To make a property as input use `@Input()` decorator. its available under `@angular/core`.
* Modifies HeroesComponent template to use `<app-hero-detail>` with `[hero]="selectedHero"`. 

## HeroService

* HeroesComponent should only be used for presenting the data. Its not supposed to deal with data fetching like we did using HEROES constant.
* For interacting with data, we use Service concept. It will be registered using `NgModule.providers array`. It will a singleton object
* At class level, we have to use `@Injectable()` decorator. This also means, it can also have use some other injectable services.
* Injectable services can be initialized via constructor of the consumer. The injectable property has to be declared as public if it has to be used by any other template etc.
    * `constructor(public/private heroService: HeroService)`
* Also an important concept of AJAX is asynchronous. When ever we are interacting with server using HTTP, we should ensure that the response is captured in an sync way. 
* In HeroService, we are using the `Observable and of from RxJS library`. More to come in HTTP angular module.
* HeroService should fetch data in onNgInit and not in constructor for obvious performance reasons.

## MessageService
* This is introduce to give some messages in the UI.
* As the JS is mostly asynchronous, we can use this service to indicate the successful async operation.
* Using MessageService in HeroService is a perfect example of `service-in-service`. 

## Defining Routes
* Using the RouterModule and Routes, we have defined multiple navigations between the dashboard, heroes list view and hero detail view.
* ????? Need a bit more detailing ?????

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
