import { ADD, REMOVE, MODIFY } from '../actions/appActions'

export const appReducer = (state = [], action) => {
    console.log("nowy stan")
    switch (action.type) {
        case ADD: {
            return [...state, action.payload];
        }
        case MODIFY: {
            return state.map(currentStateElement => {
                if (currentStateElement.id !== action.payload.id) {
                    return currentStateElement
                }
                const { author, comment, rate } = action.payload;
                return ({
                    author: author,
                    comment: comment,
                    id: currentStateElement.id,
                    rate: rate
                })
            });
        }
        case REMOVE: {
            console.log(state);
            return state.filter(currentStateElement => currentStateElement.id !== action.payload.id);
        }
        default: {
            console.warn("AAAAAAAAAAAAA")
            return state;
        }
    }
}