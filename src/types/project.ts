import { SanityImageAssetDocument } from "@sanity/client";
import { IPerson } from "./user";

export interface IProject {
  id: string;
  name: string;
  typology: string;
  location?: string;
  frontpagePhoto: IPhoto;
  type: {
    label: "course" | "phase";
    value: string;
  };
  stakeholders?: IPerson[];
  partners?: IPerson[];
  mentors?: IPerson[];
  illustrator?: IPerson[];
  photos?: IPhoto[];
  description?: string;
}

export interface IPhoto {
  id: string;
  image: SanityImageAssetDocument;
  caption: string;
}
