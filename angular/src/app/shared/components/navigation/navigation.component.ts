import { Component, ChangeDetectionStrategy } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/core/auth';
import { DestroyService } from 'src/app/shared/services';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {

  mobileNavigationMenu = false;
  navigationProfileMenu = false;

  constructor(
    private readonly destroy$: DestroyService,
    private readonly authService: AuthService
  ) {}

  logout(): void {
    this.authService.logout().pipe(takeUntil(this.destroy$)).subscribe();
  }

  toogleNavigationProfileMenu(): void {
    this.navigationProfileMenu = !this.navigationProfileMenu;
  }
  
  toogleMobileNavigationMenu(): void {
    this.mobileNavigationMenu = !this.mobileNavigationMenu;
  }
}