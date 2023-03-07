import React from "react";
import {ReactComponent as Heart} from '../../svgs/heart.svg'
const WishListIcon = () => {
  return (
    <Heart className='cursor-pointer transition stroke-light hover:stroke-primary h-8 w-8'/>
  );
};

export default WishListIcon;
