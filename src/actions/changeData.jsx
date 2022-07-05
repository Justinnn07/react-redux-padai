import axios from "axios";

export const changeData = (dispatch) => {
  axios.get("https://randomuser.me/api").then((res) => {
    const name = res.data.results[0].name.first;

    dispatch({
      type: "SET_NAME",
      name,
    });
  });
};
