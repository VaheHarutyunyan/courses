import {FC} from "react";
import {Course} from "../../types/types";
import "./card.scss";

interface ICard {
  cardData: Course;
}

export const Card: FC<ICard> = ({cardData}) => {
  const {id, bgColor, name, image} = cardData;

  return (
    <div id={id} className="card">
      <div className="card-image" style={{backgroundColor: bgColor}}>
        <img src={image} alt="" />
      </div>
      <div className="card-title">
        <span className="card-display">{name}</span>
      </div>
    </div>
  );
};
