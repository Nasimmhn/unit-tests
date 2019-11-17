// export const filterNumbers = (array, largerThan) => {
//   let newArr = []

//   for (let i = 0; i < array.length; i++) {

//     if (array[i] <= largerThan) {
//       newArr.push(array[i])
//     }

//   }
//   return newArr
// } 

export const filterNumbers = (array, largerThan) => {
  return array.filter(item => item <= largerThan)

}
