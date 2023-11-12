import imageUrlBuilder from "@sanity/image-url";
import { SanityImageAssetDocument } from "@sanity/client";
import sanityClient from "../client";

export const urlFor = (source: SanityImageAssetDocument) => {
  const builder = imageUrlBuilder(sanityClient);

  return builder.image(source);
};
