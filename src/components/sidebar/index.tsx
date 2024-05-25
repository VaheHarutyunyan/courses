import {FC} from "react";
import "./sidebar.scss";

interface IHeader {
  header: string[];
  tab: string;
  setTab: (tab: string) => void;
}
export const Sidebar: FC<IHeader> = ({header, tab, setTab}) => {
  const handleMenu = (item: string) => {
    setTab(item);
  };
  return (
    <div className="sidebar">
      <ul className="menu">
        {header.map((item, key) => {
          return (
            <li
              className={`menu-item side-display ${
                tab === item ? "active" : ""
              }`}
              key={key}
              onClick={() => handleMenu(item)}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
