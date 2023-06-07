import React from "react";
import { restaurants } from "@/mocks";
import { Restauran } from "@/components/Restauran/Restauran";

export default function Home() {

  return (
    <div>
      {restaurants.map(restauran => {
        return <Restauran restauran={restauran} />
      })}
    </div>
  );
}
