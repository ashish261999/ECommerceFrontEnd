import { useState } from "react";
// import { banner1,banner2,banner3 } from '../asset';
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

function Banner() {
  const data = [
    "https://wallpaperaccess.com/full/2483945.jpg",

    "https://t4.ftcdn.net/jpg/02/16/47/35/240_F_216473592_NefHePTpMfvYMNjD3UQTUVJy7DFPwqKA.jpg",

    "https://plus.unsplash.com/premium_photo-1683758342885-7acf321f5d53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWNvbW1lcmNlJTIwd2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",

    // "https://www.shutterstock.com/image-vector/electronics-promotional-shopping-sale-computer-gadgets-1190458762",
    // "https://www.collinsdictionary.com/images/full/market_large_354703739_1000.jpg"
    "https://www.shutterstock.com/shutterstock/photos/1190458762/display_1500/stock-vector-electronics-promotional-shopping-sale-computer-gadgets-and-touch-screen-devices-1190458762.jpg"
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const preSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen h-[650px] relative">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[400vw] h-full flex transition-transform duration-100"
        >
          <img
            className="w-screen h-full object-cover"
            src={data[0]}
            alt="imageone"
            loading="priority"
          />

          <img
            className="w-screen h-full object-cover"
            src={data[1]}
            alt="imagetwo"
          />

          <img
            className="w-screen h-full object-cover"
            src={data[2]}
            alt="imagethree"
          />

          <img
            className="w-screen h-full object-cover"
            src={data[3]}
            alt="imagefour"
          />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
          <div
            onClick={preSlide}
            className="w-14 h-12 border-[1px] border-gray-700  flex items-center
               justify-center hover:cursor-pointer  hover:bg-gray-700 hover:text-white 
                active:bg-grey-900 duration-300"
          >
            <HiArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-12 border-[1px] border-gray-700  flex items-center
               justify-center hover:cursor-pointer  hover:bg-gray-700 hover:text-white 
                active:bg-grey-900 duration-300"
          >
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner;
