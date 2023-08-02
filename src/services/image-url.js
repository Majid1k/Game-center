import image from "../assets/empty-image.webp";

const getCroppedImageUrl = (url) => {
  if (!url) return image;
  const target = "media/";

  const index = url.indexOf(target) + target.length;

  // cropped image
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
