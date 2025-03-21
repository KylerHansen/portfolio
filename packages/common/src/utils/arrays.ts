export function areArraysStrictlyEqual<T>(
  firstArray: Array<T>,
  secondArray: Array<T>
): boolean {
  if (typeof firstArray !== typeof secondArray) return false;

  if (firstArray.length !== secondArray.length) return false;

  const result = firstArray
    .map((value, index) => {
      return value === secondArray[index];
    })
    .filter((item) => item != true);

  return result.length === 0;
}
