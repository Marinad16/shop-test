import React, {useState} from "react";
import  './view.scss'

const View = ({change}) => {
  const [view, setView] = useState(false);

  const changeToGrid = () => {
    setView(false);
    change(view);
  };

  const changeToList = () => {
    setView(true);
    change(view);
  };

  return (
    <div className="view">
      <div className={view ? `list active` : `list`} onClick={changeToList}>
        <span></span>
        <span></span>
      </div>
      <div className={!view ? `grid active` : `grid`} onClick={changeToGrid}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default View;