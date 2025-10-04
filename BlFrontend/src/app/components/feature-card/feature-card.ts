import { Component,computed,input } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { Feature,FeatureType } from '../../models/feature';
import { ActionBar } from "../buttons/action-bar/action-bar";

@Component({
  selector: 'app-feature-card',
  imports: [MatCardModule, ActionBar],
  templateUrl: './feature-card.html',
  styleUrl: './feature-card.scss',
})
export class FeatureCard {
  data = input.required<Feature>();
  
  color = computed(() => {
      switch (this.data().type) {
        case FeatureType.Game:
          return 'var(--mat-sys-on-primary)';
        case FeatureType.Information:
          return 'green';
        case FeatureType.Utility:
          return 'orange';
        case FeatureType.Planning:
          return 'purple';
        case FeatureType.Testing:
          return 'red';
        default:
          return 'gray';
        } 
    });
  featureType = computed(() => FeatureType[this.data().type]);
}
