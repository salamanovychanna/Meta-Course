import { createSlice } from "@reduxjs/toolkit";

const menuReducer = createSlice({
  name: "menu",
  initialState: {
    value: [
      {
        id: 1,
        name: "Greek salad",
        price: 12.99,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus magna nec dui ullamcorper pharetra.",
        img: "https://www.wellplated.com/wp-content/uploads/2022/05/Greek-Salad-Recipe-Easy.jpg",
        addedToCart: false
      },
      {
        id: 2,
        name: "Greek salad",
        price: 12.99,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus magna nec dui ullamcorper pharetra.",
        img: "https://www.wellplated.com/wp-content/uploads/2022/05/Greek-Salad-Recipe-Easy.jpg",
        addedToCart: false
      },
      {
        id: 3,
        name: "Greek salad",
        price: 12.99,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus magna nec dui ullamcorper pharetra.",
        img: "https://www.wellplated.com/wp-content/uploads/2022/05/Greek-Salad-Recipe-Easy.jpg",
        addedToCart: false
      },
    ],
  },
  reducers: {
    addMealToCart: (state, action) => {
        console.log(state, action)
      return state;
    },
    
  },
});

export default menuReducer;