const initialState = {
    text: ""
};

export default function (state = initialState, action) {
    switch (action.type) {
        case "SHOW_TEXT":
            return {
                ...state,
                text: action.payload
            };

        default:
            return state;
    }
};