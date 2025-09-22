import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatDivider } from "@angular/material/divider";
import { FeatureCard } from "../../components/feature-card/feature-card";
import { Feature,FeatureType } from '../../models/feature';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDivider, FeatureCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  features:Feature[] = [
    {
      id: 1,
      name: 'Tic Tac Toe',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: 'tests',
      icon: 'tests',
      type: FeatureType.Game,
    },
    {
      id: 2,
      name: 'Tic Tac Toe 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: 'tests',
      icon: 'tests',
      type: FeatureType.Game,
    },
    {
      id: 3,
      name: 'Tic Tac Toe 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: 'tests',
      icon: 'tests',
      type: FeatureType.Information,
    },
    {
      id: 3,
      name: 'Tic Tac Toe 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: 'tests',
      icon: 'tests',
      type: FeatureType.Planning,
    }
  ];
}