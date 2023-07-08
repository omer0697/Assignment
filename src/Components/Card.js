import React, {useRef,useState } from "react";
import itemListImgFirst from "./Images/bg-1.png";
import itemListImgSecond from "./Images/bg-2.png";
import itemListImgThird from "./Images/bg-3.png";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { motion, useDragControls } from "framer-motion";

const itemLists = [
  {
    img: itemListImgFirst,
    title: "365 Signature Hoodie",
    price: "€33.95",
  },
  {
    img: itemListImgThird,
    title: "Organic Skinny High Waist Jeans",
    price: "€33.95",
  },
  {
    img: itemListImgSecond,
    title: "Organic Skinny High Waist Jeans",
    price: "€33.95",
  },
];

function Card() {
  const controls = useDragControls();
  const sliderRef = useRef(null);
  const [position, setPosition] = useState(0);

  const handleArrowClick = () => {
    setPosition(-200);
  };

  function ColorChanger() {
    const [indexColor,setColor]=useState(0);
    
    const colors=["#99C3CC","#CC9999","#CB99CC","#A6CC99"];

    return (
      <div className="flex flex-row gap-2 justify-end pr-1 pt-0.5">
        {colors.map((color, index) => (
          <div key={index} onClick={()=>setColor(index)} className={`${indexColor===index?"border-2 border-black":"border-2 border-white"} rounded-full w-3 h-3 cursor-pointer xl:w-4 xl:h-4`} style={{backgroundColor:color}}></div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-row pt-5 xl:pt-[68px] h-full relative">
      <motion.div
        className="flex flex-row gap-2 z-20 gap-3 xl:gap-[32px] "
        drag="x"
        dragConstraints={{ left: -200, right: 0 }}
        dragElastic={0}
        dragMomentum={false}
        ref={sliderRef}
        dragControls={controls}
        style={{ x: position }} // Set x-axis position based on state value
      >
        {itemLists.map((item, index) => (
          <div key={index} className="flex flex-col gap-2 font-avenir font-normal text-xs leading-none w-[149px] h-[292px] xl:w-[230px] xl:h-[363px]">
            <img
              src={item.img}
              alt={item.title}
              className="w-[230px] h-[310px] object-cover"
            />
            <h3 className="text-[#1D1F22] text-lg">{item.title}</h3>
            <div className="flex">
              <p className="text-[#1D1F22] text-[18px] font-bold flex-1">{item.price}</p>
              <ColorChanger />
            </div>
          </div>
        ))}
      </motion.div>
      <ArrowForwardIosRoundedIcon
        fontSize="xl"
        className="hidden p-2 border border-gray-500 text-[#1D1F22] text-4xl z-40 top-56 right-16  xl:absolute"
        onClick={handleArrowClick} // Call handleArrowClick function on arrow click
      />
    </div>
  );
}

export default Card;
