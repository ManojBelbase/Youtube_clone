import React from "react";
import Hero from "../components/Hero";
import { useAuth } from "../context/AuthProvider";
import Categories from "./Categories";

const Home = () => {
  const { data } = useAuth();
  return (
    <div className="h-[calc(100vh-6.625rem)] w-full overflow-y-scroll overflow-x-hidden scrollbar-hide">
      <Categories />
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 rounded-xl place-items-center">
        {data.map((item, i) => {
          if (item.type !== "video") return false;
          return (
            <div key={i}>
              <Hero video={item?.video} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
