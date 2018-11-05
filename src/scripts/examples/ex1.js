export default function traversingArray(arr) {
  let counter;
  const result = [];
  for (counter = 0; counter < arr.length; counter += 1) {
    result.push(arr[counter]);
  }
  return result;
}
