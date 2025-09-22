export interface Feature {
    id: number;
    name: string;
    description: string;
    type: FeatureType;
    icon?: string;
    link?: string;
    isEnabled?: boolean;
}


export enum FeatureType {
  Game,
  Information,
  Utility,
  Planning,
  Testing
}