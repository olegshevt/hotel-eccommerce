import { EDIT_USER, FETCH_USER } from "../actions/user";
import User from "../../models/user";

const initialState = {
    user: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case EDIT_USER:
            const updatedUser = new User(
                action.userData._id,
                action.userData.name,
                action.userData.lastname,
                action.userData.email,
                action.userData.password,
            )

            return {
                ...state,
                user: updatedUser
            }

        case FETCH_USER:
            return {
                ...state,
                user: action.user
            }

    }
    return state;
}