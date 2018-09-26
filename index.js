const list = [
  {person: 0, item: 0},
  {person: 0, item: 1},
  {person: 1, item: 0},
  {person: 1, item: 1}
];

const group = (model = []) => model.reduce((str, model) => `${str}${str ? ';' : ''}|${model.item}|${model.person}`, '');

console.log('there', group(list));

const string = '?|0|0;|1|0;|0|1;|1|1';

const parse = R.compose(
  R.map(R.zipObj(['item', 'person'])),
  R.map(R.map(parseFloat)),
  R.map(R.split('|')),
  R.split(';'),
  R.tail
)

console.log('reverting back ', parse(`?${group(list)}`));
