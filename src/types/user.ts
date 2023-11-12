export interface IPerson {
  name: string;
  email?: string;
  telephone?: string;
  description?: string;
}
export interface IUser extends IPerson {
  previousWork: IContent[];
  education: IContent[];
}

export interface IContent {
  id: string;
  title: string;
  place: string;
  description: string;
}
