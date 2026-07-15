import { useEffect, useState } from "react";

import LinksCategory from "./LinksCategory.jsx";
import LinksContent from "./LinksContent.jsx";
import { fetchAvailableLinks } from "../api/apiClinet.js";

const CACHE_KEY = "_cache";
const CACHE_KEY_DURATION = 60 * 60 * 1000;

const extractCategories = (links) => {
  return [...new Set(links.map((item) => item.category))].sort();
};
const getCachedLinks = (type) => {
  const key = `${type}${CACHE_KEY}`;
  const cachedData = localStorage.getItem(key);
  if (!cachedData) return null;
  try {
    const parsed = JSON.parse(cachedData);
    const isValid = Date.now() - parsed.timestamp < CACHE_KEY_DURATION;
    return isValid ? parsed.data : null;
  } catch {
    return null;
  }
};
const setCachedLinks = (data, type) => {
  localStorage.setItem(
    `${type}${CACHE_KEY}`,
    JSON.stringify({
      data: data,
      timestamp: Date.now(),
    }),
  );
};

const LinksDisplay = ({ displayConfig }) => {
  const [isFetching, setFetching] = useState(false);
  const [links, setLinks] = useState([]);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    setFetching(true);
    async function fetchLinks() {
      try {
        const cachedLinks = getCachedLinks(displayConfig.type);
        if (cachedLinks) {
          console.log(`Data for ${displayConfig.type} is already cached`);
          setLinks(cachedLinks);
          setCategory(extractCategories(cachedLinks));
          return;
        }

        const fetchedLinks = await fetchAvailableLinks(displayConfig);
        console.log(fetchedLinks);
        setLinks(fetchedLinks);
        setCategory(extractCategories(fetchedLinks));
        setCachedLinks(fetchedLinks, displayConfig.type);
      } catch (error) {
        console.error("Error fetching links:", error);
      } finally {
        setFetching(false);
      }
    }

    fetchLinks();
  }, [displayConfig.type, displayConfig.action]);

  return (
    <>
      {isFetching ? (
        <div className="loading-text">Loading...</div>
      ) : (
        <div className="container mt-2 border ">
          <div className="row mt-2 card shadow ">
            <LinksCategory categoryList={category} />
          </div>
          <div className="row border mt-2">
            <LinksContent links={links} />
          </div>
        </div>
      )}
    </>
  );
};

export default LinksDisplay;
