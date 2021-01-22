import React from "react";
import chair from "../images/chair.png";

function ReadingTheRoomScreen2(props) {
  const {
    text1,
    readingTheRoom,
    back1Props,
    backgroundObjectChair4Props,
    group36Props,
  } = props;

  return (
    <div className="readingtheroomscreen2">
      <Back1 back1={back1Props.back1} />
      <div className="overlap-group">
        <div className="text-1 border-class-1 roboto-normal-black-26px">
          {text1}
        </div>
        <BackgroundObjectChair4 chair={backgroundObjectChair4Props.chair} />
      </div>
      <Group36
        ellipse1={group36Props.ellipse1}
        ellipse2={group36Props.ellipse2}
      />
      <h1 className="reading-the-room border-class-1 baloo-regular-normal-black-44px">
        {readingTheRoom}
      </h1>
    </div>
  );
}

function Back1(props) {
  const { back1 } = props;

  return <img className="back-1" src={back1} />;
}

function BackgroundObjectChair4(props) {
  const { chair } = props;

  return (
    <div className="background-ct-chair-4">
      <img className="chair" src={chair} />
    </div>
  );
}

function Group36(props) {
  const { ellipse1, ellipse2 } = props;

  return (
    <div className="group-36">
      <img className="ellipse-1" src={ellipse1} />
      <img className="ellipse-2" src={ellipse2} />
    </div>
  );
}
const back1Data = {
  back1:
    "https://anima-uploads.s3.amazonaws.com/projects/6003e04639d5c52e06ea2e80/releases/6003e9639e5628e11dc9bb9f/img/back-1@2x.png",
};

const backgroundObjectChair4Data = {
  chair: "",
};

const group36Data = {
  ellipse1: "",
  ellipse2: "",
};

const ReadingTheRoomScreen2Data = {
  back1Props: back1Data,
  backgroundObjectChair4Props: backgroundObjectChair4Data,
  group36Props: group36Data,
};

export default ReadingTheRoomScreen2;
