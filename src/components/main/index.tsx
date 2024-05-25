import {FC} from "react";
import {IMainProps} from "../../types/types";
import {Card} from "../card";
import "./main.scss";

const Main: FC<IMainProps> = ({data}) => {
  console.log(data);

  return (
    <div className="main">
      <div className="card-group">
        {data.map((item, key: number) => {
          return <Card key={key} cardData={item} />;
        })}
      </div>
    </div>
  );
};

export default Main;
