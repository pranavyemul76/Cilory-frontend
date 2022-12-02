import React from "react";
import { Link } from "react-router-dom";
function SubCategory({ indexs, cate, className = null }) {
  const testone = (e) => {
    const li = document.querySelectorAll(".category-ul-list");
    for (let i = 0; i < li.length; i++) {
      li[i].classList.remove("ulactive");
    }
    e.target.parentNode.parentNode.classList.add("ulactive");
  };
  return (
    <>
      <li className={`${className} `} key={indexs} onClick={(e) => testone(e)}>
        <Link to={className ? `${cate.slug}` : "#"}>{cate.name}</Link>
      </li>
      {cate.subcategory.map((lowcategory, indexes) => {
        return (
          <SubCategory
            key={indexes}
            indexs={indexes}
            cate={lowcategory}
            className="category-nested-category-list"
          />
        );
      })}
    </>
  );
}

export default SubCategory;
