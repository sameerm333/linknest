import { useState } from "react";
const WebLinksCategory = ({ categoryList }) => {
  const [activeLink, setActiveLink] = useState("");
  const handleLinkClick = (section) => {
    setActiveLink(section);
  };

  return (
    <>
      <div className="d-flex flex-nowrap overflow-auto border p-2 p-md-0 flex-lg-wrap">
        {categoryList.map((category, index) => (
          <a
            key={index}
            type="button"
            className={` btn  btn-dark border mt-2 mb-2 ms-2 me-2  ${
              activeLink === category ? "active" : ""
            }`}
            href={`#${category}`}
            onClick={() => handleLinkClick(category)}
          >
            {category}
          </a>
        ))}
      </div>
    </>
  );
};
export default WebLinksCategory;
