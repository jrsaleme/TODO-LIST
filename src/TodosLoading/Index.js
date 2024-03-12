import React from "react";
//import './TodosLoadingOLD.css'
import './TodosLoading.css'

function TodosLoading(){
    return (
        /* <div className="hourglassBackground">
        <div className="hourglassContainer">
          <div className="hourglassCurves"></div>
          <div className="hourglassCapTop"></div>
          <div className="hourglassGlassTop"></div>
          <div className="hourglassSand"></div>
          <div className="hourglassSandStream"></div>
          <div className="hourglassCapBottom"></div>
          <div className="hourglassGlass"></div>
        </div>
      </div> */
       <div className="LoadingTodo-container">
            <span className="LoadingTodo-completeIcon"></span>
            <p className="LoadingTodo-text"></p>
            <span className="LoadingTodo-deleteIcon"></span>
        </div>
    )
}

export { TodosLoading }