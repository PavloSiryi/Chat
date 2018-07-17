const validVideoFormats = ['.mp4'];
const validImageFormats = ['.jpg', '.jpeg'];
const isLink = string => {
  const a = document.createElement('a');

  a.href = string;
  return (a.host && a.host !== window.location.host);
};
const isValidVideo = string => {
  return isLink(string) && validVideoFormats.includes(string.substr(string.length - 4));
};
const isValidImage = string => {
  return isLink(string) && validImageFormats.includes(string.substr(string.length - 4)) ||
    validImageFormats.includes(string.substr(string.length - 5));
};

export {
  isLink,
  isValidVideo,
  isValidImage
};
