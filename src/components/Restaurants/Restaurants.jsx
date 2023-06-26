"use client";

import { Button } from "@/components/Button/Button";
/* eslint-disable react/jsx-key */
import { Restaurant } from "@/components/Restaurant/Restaurant";
import { useDebouncedCallback } from "@/hooks/useDebounceCallback";
import React, { useCallback, useEffect, useMemo, useState } from "react";

export const Restaurants = ({ restaurants }) => {
  let [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);
  let [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

  const value = useMemo(
    () => ({
      byId: restaurants.reduce((acc, restaurant) => {
        acc[restaurant.id] = restaurant;
        return acc;
      }, {}),
      ids: restaurants.map(({ id }) => id),
    }),
    [restaurants]
  );

  const filterRestaurants = useCallback(
    (searchValue) =>
      setFilteredRestaurants(
        restaurants.filter(
          ({ name }) =>
            name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
        )
      ),
    [restaurants]
  );

  const onChangeSearchValue = useDebouncedCallback(filterRestaurants);

  useEffect(() => {
    if (restaurants.length === 0) {
      onChangeSearchValue("");
    }
  }, [onChangeSearchValue, restaurants]);

  return (
    <div className="root">
      <div className="content-box">
        <input className="input-field" onChange={(event) => onChangeSearchValue(event.target.value)} />
        <div>
          {filteredRestaurants.map(({ name }, index) => (
            <Button
              onClick={() => {
                setActiveRestaurantIndex(index);
              }}
            >
              {name}
            </Button>
          ))}
        </div>
      </div>
      {filteredRestaurants[activeRestaurantIndex] ? (
        <Restaurant restaurant={filteredRestaurants[activeRestaurantIndex]} />
      ) : (
        <span className="content-box">Нету</span>
      )}
    </div>
  );
};
