import React, { useState, useEffect } from "react";
import axios from "axios";

import { BasicCategory } from "../../../pages/Admin/AdminCategory/AdminCategory";
import { Type } from "../../../pages/Admin/AdminType/AdminType";
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
  const [typeMaxLength] = useState(15);
  const [categoryMaxLength] = useState(15);

  const [categories, setCategories] = useState<BasicCategory[]>([]);
  const [types, setTypes] = useState<Type[]>([]);

  useEffect(() => {
    fetchTypes(setTypes);
    fetchCategories(setCategories);
  }, []);

  return (
    <>
      <div className="sidebar">
        <div className="sidebar__inner">
          <div className="sidebar__inner__type">
            <h3>たいぷ</h3>
            {types.map((type) => (
              <Link
                to={`/search/type/${type.name}`}
                className="type-link"
                key={type.id}
              >
                <EllipsisText text={type.name} maxLength={typeMaxLength} />
                <div>
                  <img src={type.src} />
                </div>
              </Link>
            ))}
          </div>

          <div className="sidebar__inner__category">
            <h3>かてごり</h3>
            {categories.map((category) => (
              <Link
                to={`/search/category/${category.name}`}
                className="category-link"
                key={category.id}
              >
                #
                <EllipsisText
                  text={category.name}
                  maxLength={categoryMaxLength}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

const fetchTypes = (setTypes: React.Dispatch<React.SetStateAction<Type[]>>) => {
  axios
    .get(import.meta.env.VITE_BASE_API + "type")
    .then((response) => {
      setTypes(response.data.types);
    })
    .catch((error) => {
      console.error("List types failed:", error);
    });
};

const fetchCategories = <T extends BasicCategory>(
  setCategories: React.Dispatch<React.SetStateAction<T[]>>,
  transformData?: (data: BasicCategory[]) => T[]
) => {
  axios
    .get(import.meta.env.VITE_BASE_API + "category")
    .then((response) => {
      const data = response.data.category;
      setCategories(transformData ? transformData(data) : data);
    })
    .catch((error) => {
      console.error("List categories failed:", error);
    });
};
