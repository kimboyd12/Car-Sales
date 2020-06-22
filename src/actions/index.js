export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const addItems = item => {
  console.log("add item action creator");
  return { type: ADD_ITEM, payload: item }  
}

export const removeItems = item => {
    console.log("remove item action creator");
    return { type: REMOVE_ITEM, payload: item }
}