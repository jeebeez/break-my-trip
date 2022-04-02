export const getAllItems = (key) => {
  if (sessionStorage.getItem(`${key}`) === null)
    sessionStorage.setItem(`${key}`, "[]");
  let allItems = sessionStorage.getItem(`${key}`);
  return JSON.parse(allItems);
};

export const addNewItem = (key, value) => {
  const prevArray = getAllItems(key);
  const newArray = prevArray ? [...prevArray, value] : [value];
  sessionStorage.setItem(`${key}`, JSON.stringify(newArray));
};

export const removeItem = (key, i, reload) => {
  const prevArray = getAllItems(key);
  const newArray = prevArray.filter((item, index) => index !== i);
  sessionStorage.setItem(`${key}`, JSON.stringify(newArray));
  reload("");
};
