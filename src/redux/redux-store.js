import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import userReducer from "./users-reducer";
import { combineReducers, createStore } from "redux";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: userReducer,
})

let store = createStore(reducers);

export default store