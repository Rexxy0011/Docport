import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      {/* === TITLE === */}
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>

      {/* === ABOUT SECTION (Image + Text) === */}
      <div className="my-12 flex flex-col md:flex-row gap-12 md:gap-16 items-center">
        {/* Image */}
        <img
          className="w-full md:max-w-[380px] rounded-xl shadow-lg"
          src={assets.nurse2}
          alt=""
        />

        {/* Text */}
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-[15px] text-gray-600 leading-relaxed">
          <p className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            DocPort simplifies healthcare through technology. We bring patients
            and doctors together on one secure, easy-to-use platform — making
            appointments faster, smarter, and stress-free.
          </p>

          <p className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            We are committed to transforming how people experience healthcare.
            We believe technology should remove barriers, not create them —
            helping patients connect with verified doctors quickly, confidently,
            and securely.
          </p>

          <div className="mt-4">
            <b className="text-gray-800 text-lg">Our Vision</b>
            <p className="mt-2 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              Our vision is to revolutionize the way people access healthcare
              through innovation and technology. We’re shaping a future where
              connecting with the right doctor is effortless, fast, and reliable
              — no matter where you are.
            </p>
          </div>
        </div>
      </div>

      {/* === WHY CHOOSE US TITLE === */}
      <div className="text-xl my-10 text-gray-700 text-center md:text-left">
        <p>
          WHY <span className="font-semibold">CHOOSE US</span>
        </p>
      </div>

      {/* === FEATURE CARDS  */}
      <div className="flex flex-col md:flex-row gap-6 mb-20">
        {/* CARD 1 */}
        <div
          className="border border-gray-200 px-10 md:px-12 py-10 rounded-xl 
          shadow-sm flex flex-col gap-4 text-[15px] text-gray-600
          hover:bg-primary hover:text-white hover:shadow-lg transition-all duration-300 cursor-pointer"
        >
          <h3 className="text-lg font-semibold">Efficiency</h3>
          <p className="leading-relaxed">
            Get the care you need faster. DocPort streamlines the entire process
            — from finding a doctor to booking an appointment — saving you
            valuable time without compromising quality.
          </p>
        </div>

        {/* CARD 2 */}
        <div
          className="border border-gray-200 px-10 md:px-12 py-10 rounded-xl
          shadow-sm flex flex-col gap-4 text-[15px] text-gray-600
          hover:bg-primary hover:text-white hover:shadow-lg transition-all duration-300 cursor-pointer"
        >
          <h3 className="text-lg font-semibold">Convenience</h3>
          <p className="leading-relaxed">
            Access trusted healthcare anytime, anywhere. Whether you’re at home
            or on the go, DocPort lets you find doctors, schedule visits, and
            manage appointments with just a few taps.
          </p>
        </div>

        {/* CARD 3 */}
        <div
          className="border border-gray-200 px-10 md:px-12 py-10 rounded-xl
          shadow-sm flex flex-col gap-4 text-[15px] text-gray-600
          hover:bg-primary hover:text-white hover:shadow-lg transition-all duration-300 cursor-pointer"
        >
          <h3 className="text-lg font-semibold">Personalization</h3>
          <p className="leading-relaxed">
            Healthcare built around you. We connect you with doctors and
            specialists that match your unique needs, ensuring every experience
            feels tailored, comfortable, and personal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
