import React, {useState} from "react";
import  './view.scss'
import {useDispatch, useSelector} from "react-redux";
import {toggleView} from "../../redux/userSlice";

const View = () => {
  const view = useSelector(state => state.listView.view)
  const dispatch = useDispatch();

  const changeToGrid = () => {
    dispatch(toggleView(view))
  };

  const changeToList = () => {
    dispatch(toggleView(view))
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