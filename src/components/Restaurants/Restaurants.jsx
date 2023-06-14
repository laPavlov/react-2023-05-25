"use client";

/* eslint-disable react/jsx-key */
import { Restaurant } from "@/components/Restaurant/Restaurant";
import React, { useEffect, useState } from "react";

export const Restaurants = ({ restaurants }) => {
  let [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);
  let [restourantsName, setRestourantsName] = useState('');

  useEffect(() => {
    console.log("reset");
  }, [activeRestaurantIndex]);

  let timer;

  return (
    <div>
      <div>
        <input
          onChange={(event) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
              setRestourantsName(event.target.value);
            }, 2000)
          }}
        />
        {restaurants.map(({ id, name }, index) => (
          <button key={id}
            disabled={!name.includes(restourantsName) && restourantsName != ''}
            onClick={() => {
              setActiveRestaurantIndex(index);
            }}
          >
            {name}
          </button>
        )
        )}
      </div>
      <Restaurant restaurant={restaurants[activeRestaurantIndex]} />
    </div>
  );
};
