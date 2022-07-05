import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeData } from "./actions/changeData";
const App = () => {
  // pull data from the reducer.
  const { name } = useSelector((state) => state.reducer1);

  // for setting updated data into the reducer.
  const dispatch = useDispatch();

  const key = useSelector((state) => state);

  return (
    <div>
      <button onClick={() => changeData(dispatch)}>Call API</button>
      <h1>{name}</h1>
    </div>
  );
};

export default App;
