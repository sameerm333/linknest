import { useEffect, useState } from "react";

import WebLinksCategory from "./WebLinksCategory.jsx";
import WebLinksContent from "./WebLinksContent.jsx";
import { fetchAvailableLinks } from "../api/apiClinet.js";

const CACHE_KEY = "web_links_cache";
const CACHE_KEY_DURATION = 60 * 60 * 1000;

const extractCategories = (links) => {
  return [...new Set(links.map((item) => item.category))].sort();
};
const getCachedLinks = () => {
  const cachedData = localStorage.getItem(CACHE_KEY);
  if (!cachedData) return null;
  try {
    const parsed = JSON.parse(cachedData);
    const isValid = Date.now() - parsed.timestamp < CACHE_KEY_DURATION;
    return isValid ? parsed.data : null;
  } catch {
    return null;
  }
};
const setCachedLinks = (data) => {
  localStorage.setItem(
    CACHE_KEY,
    JSON.stringify({
      data: data,
      timestamp: Date.now(),
    }),
  );
};

const WebLinksDisplay = () => {
  const [isFetching, setFetching] = useState(false);
  const [links, setLinks] = useState([]);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    setFetching(true);
    async function fetchLinks() {
      try {
        const cachedLinks = getCachedLinks();
        if (cachedLinks) {
          console.log("data is already cached");
          setLinks(cachedLinks);
          setCategory(extractCategories(cachedLinks));
          return;
        }

        const fetchedLinks = await fetchAvailableLinks();
        // console.log(fetchedLinks);
        setLinks(fetchedLinks);
        setCategory(extractCategories(fetchedLinks));
        setCachedLinks(fetchedLinks);
      } catch (error) {
        console.error("Error fetching links:", error);
      } finally {
        setFetching(false);
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
