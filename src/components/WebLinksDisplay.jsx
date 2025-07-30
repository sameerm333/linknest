import { useEffect, useState } from "react";

import WebLinksCategory from "./WebLinksCategory.jsx";
import WebLinksContent from "./WebLinksContent.jsx";
import { fetchAvailableLinks } from "../api/apiClinet.js";

const WebLinksDisplay = () => {
  const [isFetching, setFetching] = useState(false);
  const [links, setLinks] = useState([]);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    setFetching(true);
    async function fetchLinks() {
      try {
        const fetchedLinks = await fetchAvailableLinks();
        // console.log(fetchedLinks);
        setLinks(fetchedLinks);
        let categories = [
          ...new Set(fetchedLinks.map((item) => item.category)),
        ];
        categories.sort();
        setCategory(categories);
        setFetching(false);
      } catch (error) {
        setFetching(false);
        console.error("Error fetching links:", error);
      }
    }

    fetchLinks();
  }, []);

  return (
    <>
      {isFetching ? (
        <div className="loading-text">Loading...</div>
      ) : (
        <div className="container mt-2 border ">
          <div className="row mt-2 card shadow ">
            <WebLinksCategory categoryList={category} />
          </div>
          <div className="row border mt-2">
            <WebLinksContent links={links} />
          </div>
        </div>
      )}
    </>
  );
};

export default WebLinksDisplay;
