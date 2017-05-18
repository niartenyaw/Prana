export const asArray = obj => {
  obj = obj || {};
  return Object.keys(obj).map(key => obj[key]);
};
