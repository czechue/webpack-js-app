// const sum = require();
import traversingArray from '../src/scripts/examples/ex1';

const names = ['Ben', 'Jafar', 'Matt', 'Priya', 'Brian'];

test('traversingArray', () => {
  const result = traversingArray(names);
  expect(result).toEqual(names);
});
