import React from "react";
import { bazarlight, payment } from "../asset";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";

function Footer() {
  return (
    <div className=" bg-black text-[#949494] py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        <div className="flex flex-col gap-7">
          <img className=" w-36 h-12" src={bazarlight} alt="lightlogo" />
          <p className="text-white text-sm tracking-wide">@ ReactDB.com</p>
          <img className="w-56 h-10" src={payment} alt="paymentlogo" />
          <div className="flex text-gray-400 trxt-lg gap-5">
            <ImGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Locate us</h2>
          <div className="text-base flex flex-col gap-4">
            <p>Sk pg hinjewadi phase - 1</p>
            <p>Mobike : 091 6952482654</p>
            <p>Phone : 091 9772512004</p>
            <p>email : bazar@gmail.com</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Profile</h2>
          <div className="flex flex-col gap-4 text-base">
            <p className=" flex item-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPersonFill />
              </span>
              my account
            </p>

            <p className=" flex item-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPaypal />
              </span>
              checkout
            </p>

            <p className=" flex item-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <MdLocationOn />
              </span>
              order tracking
            </p>

            <p className=" flex item-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <FaHome />
              </span>
              help & support
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center ">
          <input
            className="bg-transparent border px-4 py-2 text-sm"
            placeholder="e-mail"
            type="text"
          />
          <button
            className="text-sm border text-white border-t-0  hover:bg-gray-900
                    active:bg-white active:text-black"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
export default Footer;
