export interface IProject {
  name: string;
  id: string;
  typology: string;
  location?: string;
  type: {
    label: "course" | "phase";
    value: string;
  };
  stakeholders?: string[];
  partners?: string[];
  mentor?: string[];
  illustrator?: string[];
  photo?: string;
  description?: string;
}
