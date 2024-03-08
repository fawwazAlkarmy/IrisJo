export type RootStackParamList = {
  Onboarding: undefined;
  Camera: undefined;
  Assessment: undefined;
};

export interface IAssessmentResult {
  access_token: string;
  completed: number;
  created: number;
  custom_id: any;
  input: Input;
  model_version: string;
  result: Result;
  sla_compliant_client: boolean;
  sla_compliant_system: boolean;
  status: string;
}

export interface Input {
  datetime: string;
  health: string;
  images: string[];
  latitude: any;
  longitude: any;
  similar_images: boolean;
}

export interface Result {
  disease: Disease;
  is_healthy: IsHealthy;
  is_plant: IsPlant;
}

export interface Disease {
  suggestions: Suggestions[];
}

export interface Suggestions {
  details: Details;
  id: string;
  name: string;
  probability: number;
  similar_images: SimilarImages[];
}

export interface SimilarImages {
  id: string;
  url: string;
  similarity: number;
  url_small: string;
}

export interface Details {
  entity_id: string;
  language: string;
}

export interface IsHealthy {
  binary: boolean;
  probability: number;
  threshold: number;
}

export interface IsPlant {
  binary: boolean;
  probability: number;
  threshold: number;
}
