export const getFilteredData = (value, userData) => {
  const data = userData.filter((data) =>
    Object.values(data).some((item) => {
      if (!Array.isArray(item))
        return item.toLowerCase().includes(value.toLowerCase());
      else {
        return item.some((data) =>
          data.toLowerCase().includes(value.toLowerCase())
        );
      }
    })
  );
  return data;
};
