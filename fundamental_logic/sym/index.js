// function sym(...args) {
//   return args.reduce((acc, curr) => [
//     ...acc,
//     ...curr.filter((item) => !acc.includes(item) && !curr.includes(item), []),
//   ]);
// }

// console.log(sym([1, 2, 3], [5, 2, 1, 4]));

function sym(...args) {
  return args.reduce(
    (acc, curr) => [
      ...acc.filter((item) => !curr.includes(item)),
      ...curr.filter((item) => !acc.includes(item)),
    ],
    []
  );
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));
