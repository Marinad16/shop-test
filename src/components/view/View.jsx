import React, {useState} from "react";
import  './view.scss'

const View = () => {
const [view, setView] = useState(true);

  const changeToGrid = () => {
    setView(true);
  };

  const changeToList = () => {
    setView(false);
  };
  console.log(view)

  return (
    <div className="view">
      <div className={!view ? `list active` : `list`} onClick={changeToList}>
        <span></span>
        <span></span>
      </div>
      <div className={view ? `grid active` : `grid`} onClick={changeToGrid}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default View;