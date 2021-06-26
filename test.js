// const input = "><><<><><><";

// const turn_count = (army) => {
//   const arrayArmy = army.split("");

//   return arrayArmy.reduce((acc, curr, i, a) => {
//     if (curr === "<" && a[i + 1] === ">") {
//       acc++;
//     }
//     return acc;
//   }, 0);
// };

// const findMajority = (arr = []) => {
//   const threshold = Math.floor(arr.length / 2);
//   const map = {};
//   for (let i = 0; i < arr.length; i++) {
//     const value = arr[i];
//     map[value] = map[value] + 1 || 1;
//     if (map[value] > threshold) return value;
//   }
//   return false;
// };
// console.log(turn_count(input));
const Sean = () => {
  const a = "A";
  const b = "B";
  const c = "C";

  return { a, b, c };
};
const { a, b, c } = Sean();

console.log("response => ", a);
//{ var1, var2, var3... } = function(params);
