const GetParams = (query) => {
  if (query) {
    const queryString = query.split("?")[1];
    if (queryString.length > 0) {
      const params = queryString.split("&");
      const paramsObj = {};
      params.forEach((param) => {
        const keyValue = param.split("=");
        paramsObj[keyValue[0]] = keyValue[1].split(",");
      });
      console.log(paramsObj);
      return paramsObj;
    }
  }
  console.log({});
  return {};
};

const GenrateUrl = (e, genrateUrl) => {
  const value = e.target.value;
  let Url;
  const name = e.target.name;
  if (e.target.checked) {
    if (genrateUrl[name]) {
      Url = { ...genrateUrl, [name]: [...genrateUrl[name], value] };
    } else {
      Url = { ...genrateUrl, [name]: [value] };
    }
  } else {
    const FilterUrl = genrateUrl[name].filter((i) => {
      return i !== value;
    });
    Url = { ...genrateUrl, [name]: FilterUrl };
  }

  return Url;
};
export { GetParams, GenrateUrl };
