import React from "react";
import promptbox from "../images/promptbox.png";

const PromptBox = ({ title, msg, proTips, task }) => {
  return (
    <div className="promptbox">
      <img src={promptbox} alt="prompt-box" />
      <h3 className="promptbox-title">{title}</h3>
      <p className="promptbox-msg">{msg}</p>
      <p className="promptbox-protips">{proTips}</p>
      <h4 className="promptbox-task">{task}</h4>
    </div>
  );
};

export default PromptBox;
