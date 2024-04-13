import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../auth/interfaces/user.interface';
type listNavigation = {
  label: string;
  icon: string;
  url: string;
};

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``,
})
export class LayoutPageComponent {
  private router = inject(Router);
  private authService = inject(AuthService);
  sidevarItems: listNavigation[] = [
    { label: 'Listado', icon: 'label', url: './list' },
    { label: 'Añadir', icon: 'add', url: './new-hero' },
    { label: 'Buscar', icon: 'search', url: './search' },
  ];

  get user():User | undefined {
    return this.authService.currentUser;
  }
  onLogOut() {
    this.authService.logOut();
    this.router.navigate(['/auth']);
  }
}
