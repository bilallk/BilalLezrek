export interface Feature {
    id: number;
    name: string;
    description: string;
    link: string;
    icon: string;
    type: FeatureType;
}


export enum FeatureType {
  Game,
  Information,
  Utility,
  Planning,
  Testing
}