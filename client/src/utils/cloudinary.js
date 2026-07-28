const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

export const getImageUrl = (publicIdOrUrl, transforms = "f_auto,q_auto") => {
  if (publicIdOrUrl.startsWith("http")) {
    return publicIdOrUrl.replace("/upload/", `/upload/${transforms}/`);
  }
  return `${BASE_URL}/${transforms}/${publicIdOrUrl}`;
};
