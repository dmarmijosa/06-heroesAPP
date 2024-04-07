import { Component, OnInit, inject } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '@heroInterface/hero.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: ``,
})
export class HeroPageComponent implements OnInit {
  hero?: Hero;
  private heroService = inject(HeroesService);
  private activateRouter = inject(ActivatedRoute);
  private router = inject(Router)

  ngOnInit(): void {
    this.activateRouter.params
      .pipe(switchMap(({ id }) => this.heroService.getHeroById(id)))
      .subscribe((hero) => {
        if(!hero) return this.router.navigate(['/heroes/list']);
        this.hero = hero;
        return;
      });
  }
}
