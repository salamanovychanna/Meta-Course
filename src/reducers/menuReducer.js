import { createSlice } from "@reduxjs/toolkit";

const menuReducer = createSlice({
  name: "menu",
  initialState: {
    value: [
      {
        id: 1,
        name: "Greek salad",
        price: 6.99,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus magna nec dui ullamcorper pharetra.",
        img: "https://www.wellplated.com/wp-content/uploads/2022/05/Greek-Salad-Recipe-Easy.jpg",
        addedToCart: false,
      },
      {
        id: 2,
        name: "Pita & Tzatziki",
        price: 15.99,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus magna nec dui ullamcorper pharetra.",
        img: "https://thefoodiephysician.com/wp-content/uploads/2023/02/fullsizeoutput_327c.jpeg",
        addedToCart: false,
      },
      {
        id: 3,
        name: "Gyro Salad",
        price: 8.99,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus magna nec dui ullamcorper pharetra.",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhp8GT0P1UrqSK0rT951oNHEF3DYcBvGyKKMvR5tFpl5Ao13NNjB92DPG4l15-kbl8ZM6s070JDErVgZwqepjqfEykfH0k95wwKzDXyMTFnASBAN2G9VLRo6OF1NMKANINBB0iD0Xd1EnM/s1600/gyros-salad-2074.jpg",
        addedToCart: false,
      },
      {
        id: 4,
        name: "Saganaki",
        price: 7.99,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus magna nec dui ullamcorper pharetra.",
        img: "https://www.dianekochilas.com/wp-content/uploads/2023/12/cheese-saganaki-recipe.jpg",
        addedToCart: false,
      },
    ],
  },
  reducers: {
    addMealToCart: (state, action) => {
      return state;
    },
  },
});

export default menuReducer;
