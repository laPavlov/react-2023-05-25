import React from "react";
import { restaurants } from "@/mocks";
import { Restaurant } from "@/components/Restaurant/Restaurant";

export default function Home() {

  return (
    <div>
      {restaurants.map(restaurant => {
        return <Restaurant restaurant={restaurant} />
      })}
    </div>
  );
}
