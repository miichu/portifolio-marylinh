export interface IProject {
  name: string;
  id: string;
  location?: string;
  type?: string;
  phase?: string;
  stakeholders?: string[];
  course?: string;
  partners?: string[];
  mentor?: string;
  photo: string;
}
