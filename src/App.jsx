import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeData } from "./actions/changeData";
const App = () => {
  const { name } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => changeData(dispatch)}>Call API</button>
      <h1>{name}</h1>
    </div>
  );
};

export default App;
