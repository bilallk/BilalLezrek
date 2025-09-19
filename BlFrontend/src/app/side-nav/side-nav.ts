import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavContainer,MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.html',
  styleUrls: ['./side-nav.css'],
  imports: [MatSidenav, MatSidenavContainer,MatListModule,MatToolbarModule,MatButtonModule,RouterModule,MatSidenavModule,MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNav {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  toggle() {
    this.sidenav.toggle();
  }
}
