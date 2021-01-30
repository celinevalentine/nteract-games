import React from "react";
import inPersonEvent from "../images/inPersonEvent.png";
import zoomCallIcon from "../images/zoomCallIcon.png";
import coffeeChat from "../images/coffeeChat.png";
import { Link } from "react-router-dom";

const TableofContents = () => {
  return (
    <div>
      <h1 id="choose-scenario">Choose a Scenario</h1>
      <Link to="/readingtheroom/inpersonevent">
        <img id="in-person-event" src={inPersonEvent} alt="in-person-event" />
      </Link>
      <Link to="/readingtheroom/zoomroom/tasks/">
        <img id="zoom-call-icon" src={zoomCallIcon} alt="zoom-call" />
      </Link>
      <Link to="/readingtheroom/coffeechat/tasks">
        <img id="coffee-chat" src={coffeeChat} alt="coffee-chat" />
      </Link>
    </div>
  );
};

export default TableofContents;
