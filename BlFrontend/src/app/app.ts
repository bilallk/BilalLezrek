import { Component, signal } from '@angular/core';
import { SideNav } from './side-nav/side-nav';


@Component({
  selector: 'app-root',
  imports: [SideNav],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('BlFrontend');
}
