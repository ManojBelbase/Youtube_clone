import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../api/rapidapi";
import SearchCard from "./SearchCard";

const Search = () => {
  const [result, setResult] = useState([]); // Initialize as an empty array
  const { searchQuery } = useParams();

  useEffect(() => {
    fetchSearchResult();
  }, [searchQuery]);

  const fetchSearchResult = () => {
    fetchData(`search/?q=${searchQuery}`).then(({ contents }) => {
      setResult(contents || []); // Ensure contents is always an array
    });
  };

  return (
    <div className="h-[calc(100vh-6.625rem)] overflow-y-scroll  overflow-x-hidden">
      <div className="grid grid-cols-1 gap-4 rounded-xl">
        {result.length === 0 ? ( // Check if no results
          <div>No results found.</div>
        ) : (
          result.map((item, i) => {
            if (item?.type !== "video") return null; // Safely handle non-video types
            return <SearchCard key={i} video={item?.video} />;
          })
        )}
      </div>
    </div>
  );
};

export default Search;
