import { IProject } from "../types/project";
import { IPerson } from "../types/user";

export const mapPersonInfo = (personResponse: any): IPerson => {
  return {
    name: personResponse.name,
    email: personResponse.email ?? "",
    telephone: personResponse.telephone ?? "",
    description: personResponse.description ?? [],
  };
};

export const mapResponseToProjects = (response: any[]): IProject[] => {
  console.log(response);
  return response.map((project: any) => {
    return {
      id: project._id,
      name: project.name,
      typology: project.typology,
      frontpagePhoto: project.frontpagePhoto,
      location: project.location ?? "",
      type: project.type,
      stakeholders:
        project.stakeholder?.map((person: any) => {
          return mapPersonInfo(person);
        }) ?? [],
      partners:
        project.partner?.map((person: any) => mapPersonInfo(person)) ?? [],
      mentors:
        project.mentor?.map((person: any) => mapPersonInfo(person)) ?? [],
      description:
        project.description?.map((descriptionObject: any) => {
          return descriptionObject.children[0].text;
        }) ?? [],
      photos:
        project.photos?.map((photo: any) => {
          return {
            id: photo._key,
            image: photo.image,
            caption: photo.caption,
          };
        }) ?? [],
    };
  });
};
