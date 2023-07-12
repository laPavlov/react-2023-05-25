import { Menu } from "@/components/Menu/Menu";
import { selectMenuInRestaurant } from "@/redux/features/restaurant/selectors";
import React from "react";
import { useSelector } from "react-redux";

export const MenuContainer = ({ menu }) => {
//     const menu = useSelector((state) =>
//         selectMenuInRestaurant(state, restaurantId)
//     );
// console.log(menu);
    return <Menu menu={menu} />;
};
