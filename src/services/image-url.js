/* OPtimize/crop image :- The card images are very big in pixels, we are only showing them in small cards so we don't need large sized pictures,
 downloading & showing these images can slow the performance of web, few api's allow us to reduce image size, try it by
 copying image url and add crop property in it media.rawg.io/media/crop/600/400/games.....  you'll see smaller pic*/

// this function takes a url as perameter & returns a new modified url where we only add image crop size
const getCroppedImageUrl = (url) => {
  const target = "media/"; // /media keyword is in the url of media

  // in our url find indexOf word(media) + add lenght of media to the index
  const index = url.indexOf(target) + target.length;

  // then slice url from begining of the url to including /media + crop image to size + add all remaining characters in orignal url
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};
// now use this function in GameCard where we have url
// copy image adress & paste in new tab to see new property is added in url

export default getCroppedImageUrl;
