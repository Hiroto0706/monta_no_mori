import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./AdminSidebar.css";
import { Link } from "react-router-dom";

interface EllipsisTextProps {
  text: string;
  maxLength: number;
}

export const EllipsisText: React.FC<EllipsisTextProps> = ({
  text,
  maxLength,
}) => {
  const truncatedText =
    text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  return <span>{truncatedText}</span>;
};

const Sidebar: React.FC = () => {
  const [maxLength] = useState(10);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("access_token");
    console.log("君ログインしてないなぇ！1");
    navigate("/login");
  };

  return (
    <>
      <div className="sidebar admin">
        <div className="sidebar__inner admin">
          <div className="sidebar__inner__type">
            <h3>Menu</h3>
            <Link to="/admin/image" className="type-link">
              <EllipsisText text="Image" maxLength={maxLength} />{" "}
              <div>
                <img src="/image-icon-1.png" />
              </div>
            </Link>
            <Link to="/admin/type" className="type-link">
              <EllipsisText text="Type" maxLength={maxLength} />{" "}
              <div>
                <img src="/type-icon-1.png" />
              </div>
            </Link>
            <Link to="/admin/category" className="type-link">
              <EllipsisText text="Category" maxLength={maxLength} />{" "}
              <div>
                <img src="/category-icon-1.png" />
              </div>
            </Link>
          </div>

          <div className="type-link logout" onClick={() => logout()}>
            <EllipsisText text="LOGOUT" maxLength={maxLength} />{" "}
            <div>
              <img src="/logout-icon.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
