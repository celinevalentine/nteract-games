import React from "react";
import "./ZoomCallStart.css";

function ZoomCallStart(props) {
  const { blackBackground, event, prompt } = props;

  return (
    <div className="zoomcallstart">
      <div className="overlap-group">
        <img className="overlap-group-item" src={blackBackground} />
        <img className="event" src={event} />
        <a>
          <div className="overlap-group-item"></div>
        </a>
        <img className="prompt" src={prompt} />
      </div>
    </div>
  );
}
export default ZoomCallStart;
