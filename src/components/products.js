import React from "react";
import Productcart from "./productcart";

function Products({ products }) {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
          shopping everyday
        </h1>
        <span className="w-20 h-[3px]  bg-black"></span>
        <p className="max-w-[700px] text-gray-600  text-center">
          {" "}
          Loren Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.{" "}
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
        {products?.map((item) => (
          <Productcart key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
}
export default Products;
