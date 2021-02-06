import React from "react";

const InPersonSubMenu = () => {
  return (
    <div
      id="iframe"
      dangerouslySetInnerHTML={{
        __html: "<iframe src='https://giphy.com/embed/EIiJp9cQ3GeEU'/>",
      }}></div>
  );
};

export default InPersonSubMenu;
