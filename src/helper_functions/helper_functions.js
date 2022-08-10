const importImgFolder = (reqContext) => {
  let images = {};
  reqContext.keys().forEach((item) => {
    images[item.replace("./", "").split(".")[0]] = reqContext(item);
  });
  return images;
};

export { importImgFolder };
