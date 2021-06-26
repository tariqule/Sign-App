import userReducer from "./slices/user";
import homeReducer from "./slices/home";
//useState: but global
//temporary state : it gets removed everytime you refresh the page

export const reducer = {
  user: userReducer,
  home: homeReducer,
};
