export const arrayTo2DArray2 = (list: any[], howMany: number) => {
  let idx = 0;
  const result: any[] = [];
  while (idx < list.length) {
    if (idx % howMany === 0) {
      result.push([]);
    }
    result[result.length - 1].push(list[idx++]);
  }
  return result;
};

export const groupBy = (arr, callback) => {
  return arr.reduce((acc = {}, ...args) => {
    const key = callback(...args);
    acc[key] ??= [];
    acc[key].push(args[0]);
    return acc;
  }, {});
};
