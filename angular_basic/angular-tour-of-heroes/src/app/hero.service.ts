import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import {Hero} from './hero';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // Todo: send the mesage _after_ fetching the heroes
    this.log('fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl).pipe( catchError(this.handleError('getHeroes', [])));
  }

  getHero(id: number): Observable<Hero> {
    // Todo: send the messahe after fetching the hero
    this.log(`fetched hero: ${id}`);
    return this.http.get<Hero[]>(this.heroesUrl).find(hero => hero.id === id));
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  private handleError<T> (operation = `operation`, result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to standard log framework
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning empty result.
      return of(result as T);
    }
  }

}
