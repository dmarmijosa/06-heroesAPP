import { Component, inject } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { FormControl } from '@angular/forms';
import { Hero } from '@heroInterface/hero.interface';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: ``,
})
export class SearchPageComponent {
  private heroService = inject(HeroesService);
  heroes: Hero[] = [];
  searchInput = new FormControl('');
  selectedHero?: Hero;

  searchHero() {
    const value: string = this.searchInput.value || '';
    if (!value) {
      this.heroes = [];
      return;
    }
    this.heroService
      .getSuggetions(value)
      .subscribe((heroes) => (this.heroes = heroes));
  }
  OnSelectOption(event: MatAutocompleteSelectedEvent) {
    if (!event.option.value) {
      this.selectedHero = undefined;
      return;
    }
    const hero: Hero = event.option.value;
    this.searchInput.setValue(hero.superhero);
    this.selectedHero = hero;
  }
}
