import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatDivider } from "@angular/material/divider";
import { FeatureCard } from "../../components/feature-card/feature-card";
import { Feature } from '../../models/feature';
import { Observable } from 'rxjs';
import { FeatureService } from '../../service/service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDivider, FeatureCard,AsyncPipe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {

  features$!: Observable<Feature[]>;
  constructor(private features: FeatureService) {
    this.features$ = this.features.getAll();
  }
}