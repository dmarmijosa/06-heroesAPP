import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '@heroInterface/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap, tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: ``,
})
export class NewPageComponent implements OnInit {
  private heroService = inject(HeroesService);
  private activateRouter = inject(ActivatedRoute);
  private router = inject(Router);

  publishers = [
    { id: 'DC Comics', desc: 'DC- Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return;
    this.activateRouter.params
      .pipe(switchMap(({ id }) => this.heroService.getHeroById(id)))
      .subscribe((hero) => {
        if (!hero) return this.router.navigate(['/heroes']);
        this.heroForm.reset(hero);
        return;
      });
  }

  constructor(
    private matSnackbar: MatSnackBar,
    private dialog: MatDialog,
  ) {}

  heroForm = new FormGroup({
    id: new FormControl(''),
    superhero: new FormControl('', { nonNullable: true }),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_image: new FormControl(''),
  });

  get currentHero(): Hero {
    const hero = this.heroForm.value as Hero;
    return hero;
  }

  onSubmit() {
    if (this.heroForm.invalid) return;
    if (this.currentHero.id) {
      this.heroService.updateHero(this.currentHero).subscribe((hero) => {
        this.showSnackbar(`${hero.superhero} updated!`);
      });
      return;
    }
    this.heroService.addHero(this.currentHero).subscribe((hero) => {
      this.router.navigate(['/heroes/edit', hero.id]);
      this.showSnackbar(`${hero.superhero} created!`);
    });
  }

  onDeleteHero() {
    if (!this.currentHero.id) throw Error('Hero id is required');
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.currentHero,
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter((result: boolean) => result),
        switchMap(() => this.heroService.deleteHeroById(this.currentHero)),
        filter((wasDeleted: boolean) => wasDeleted),
      )
      .subscribe(() => {
        this.router.navigate(['/heroes']);
      });
    // dialogRef.afterClosed().subscribe((resul) => {
    //   if (!resul) return;
    //   this.heroService.deleteHeroById(this.currentHero).subscribe((resp) => {
    //     if (resp) this.router.navigate(['/heroes']);
    //   });
    // });
  }

  showSnackbar(mensaje: string) {
    this.matSnackbar.open(mensaje, 'done', {
      duration: 2500,
    });
  }
}
