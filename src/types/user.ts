export interface IUser {
  name: string;
  email: string;
  telephone: string;
  previousWork: IContent[];
  education: IContent[];
  description: string;
}

export interface IContent {
  title: string;
  description: string;
}
