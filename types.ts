
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  sustainabilityFeatures: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Metric {
  name: string;
  value: number;
  goal: number;
}
