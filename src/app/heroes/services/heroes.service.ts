import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '@environment/environment';
import { Hero } from '@heroInterface/hero.interface';

import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private baseUrl: string = environment.baseUrl;
  private http: HttpClient = inject(HttpClient);
  constructor() {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);
  }

  getHeroById(id: string): Observable<Hero | undefined> {
    return this.http
      .get<Hero>(`${this.baseUrl}/heroes/${id}`)
      .pipe(catchError((error) => of(undefined)));
  }
  getSuggetions(query: string): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`, {
      params: { q: query, _limit: '6' },
    });
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(`${this.baseUrl}/heroes`, hero);
  }
  updateHero(hero: Hero): Observable<Hero> {
    if (!hero) throw Error('Hero id is required');
    return this.http.patch<Hero>(`${this.baseUrl}/heroes/${hero.id}`, hero);
  }

  deleteHeroById(hero: Hero): Observable<boolean> {
    if (!hero) throw Error('Hero id is required');
    return this.http.delete(`${this.baseUrl}/heroes/${hero.id}`).pipe(
      map((resp) => true),
      catchError((err) => of(false)),
    );
  }
}
