import { LineStyle, Timeline, TrendingUp } from "@material-ui/icons";
import "./sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <LineStyle />
                List All pods
              </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline />
              Network policy
            </li>
            <li className="sidebarListItem">
              <TrendingUp />
              Network ingress
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
