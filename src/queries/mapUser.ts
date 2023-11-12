import { IContent, IUser } from "./../types/user";

export const mapResponseToUser = (user: any): IUser => {
  return {
    name: user.name,
    email: user.email,
    telephone: user.telephone,
    education: user.education.map((eduObject: any): IContent => {
      return {
        id: eduObject.key,
        title: eduObject.title,
        place: eduObject.place,
        description: eduObject.description,
      };
    }),
    previousWork: user.previousWork.map((workObject: any): IContent => {
      return {
        id: workObject.key,
        title: workObject.title,
        place: workObject.place,
        description: workObject.description,
      };
    }),
    description: user.description.map((descriptionObject: any) => {
      return descriptionObject.children[0].text;
    }),
  };
};
