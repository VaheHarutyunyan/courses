import {FC} from "react";
import "./empty.scss";

export const EmptyComponent: FC = () => {
  return (
    <div className="empty-container">
      <p>Data is empty</p>
    </div>
  );
};
