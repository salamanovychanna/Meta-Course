import { useSelector } from "react-redux";

export const submitAPI = (formData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 3000);
  });
};

// export const checkAvailability = (checkingValue) => {
//   return new Promise((resolve, reject) => {
//     const state = useSelector((state) => state);
//     console.log(state);
//     setTimeout(() => {
//       if (
//         state.availableReservations.some(
//           (item) => item.date === checkingValue.date
//         ) ||
//         state.availableReservations.some(
//           (item) => item.maxPeople === checkingValue.maxPeople
//         )
//       ) {
//         resolve(true);
//       } else {
//         reject(false);
//       }
//     }, 3000);
//   });
// };
