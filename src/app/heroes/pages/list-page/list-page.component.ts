import { Component, OnInit, inject } from '@angular/core';
import { Hero } from '@heroInterface/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: ``,
})
export class ListPageComponent implements OnInit {
  heroes: Hero[] = [];
  private heroService = inject(HeroesService);
  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((resp: Hero[]) => {
      this.heroes = resp;
    });
  }
}
