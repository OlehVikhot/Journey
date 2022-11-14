import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  parsedData: [],
  savedLists: [
    {
      id: 1241224,
      name: "Item 1",
      image: "https://how.travel/wp-content/uploads/2019/05/ce-travel1.jpg",
      description: "Short Descriprion",
      intPlaces: [],
      cities: [],
    },
  ],
};

export const savedSlice = createSlice({
  isSaved: true,
  name: "saved",
  initialState,
  reducers: {
    parseData: (state, action) => {
      state.parsedData = action.payload;
    },
    addTrip: (state, action) => {
      state.savedLists.push(action.payload);
    },
    addTripItem: (state, action) => {
      const trip = state.savedLists.filter(
        (item) => item.id === action.payload.tripId
      )[0];
      const tripId = state.savedLists.indexOf(trip);

      if (action.payload.item.city) {
        state.parsedData.intPlaces.map((item) => {
          if (item.id === action.payload.item.id) {
            item.isSaved = true;
            state.savedLists[tripId].intPlaces.push(item);
            state.savedLists[tripId].image = item.image;
          }
        });
        state.parsedData.restaurants.map((item) => {
          if (item.id === action.payload.item.id) {
            item.isSaved = true;
            state.savedLists[tripId].intPlaces.push(item);
            state.savedLists[tripId].image = item.image;
          }
        });
      } else {
        state.parsedData.cities.map((item) => {
          if (item.id === action.payload.item.id) {
            item.isSaved = true;
            state.savedLists[tripId].cities.push(item);
            state.savedLists[tripId].image = item.image;
          }
        });
      }
    },
    removeTripItem: (state, action) => {
      if (action.payload.item.city) {
        state.savedLists.map((item, index1) => {
          item.intPlaces.map((item, index2) => {
            if (item.id === action.payload.item.id) {
              state.savedLists[index1].intPlaces.splice(index2, 1);
            }
          });
        });

        state.parsedData.intPlaces.map((item) => {
          if (item.id === action.payload.item.id) {
            item.isSaved = false;
          }
        });
        state.parsedData.restaurants.map((item) => {
          if (item.id === action.payload.item.id) {
            item.isSaved = false;
          }
        });
      } else {
        state.savedLists.map((item, index1) => {
          item.cities.map((item, index2) => {
            if (item.id === action.payload.item.id) {
              state.savedLists[index1].cities.splice(index2, 1);
            }
          });
        });

        state.parsedData.cities.map((item) => {
          if (item.id === action.payload.item.id) {
            item.isSaved = false;
          }
        });
      }
    },
  },
});

export const { parseData, addTrip, addTripItem, removeTripItem } =
  savedSlice.actions;

export default savedSlice.reducer;
