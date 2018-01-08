import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs/Observable';

import { Hero } from '../hero';

import { Subject } from 'rxjs/Subject';
import { debounceTime } from 'rxjs/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/operators/distinctUntilChanged';
import { switchMap } from 'rxjs/operators/switchMap';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(

      // wait for 300ms after each keystroke
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new observable each time the term changes
      switchMap( (term: string) => this.heroService.searchHeroes(term))
    );
  }

  // Push a search term into observable stream
  search(term: string): void {
    this.searchTerms.next(term);
  }

}
