export const showText = (text) => (dispatch) => {
  dispatch({
    type: "SHOW_TEXT",
    payload: text
  });
};