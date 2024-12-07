"use client";

import React, { useEffect, useState } from "react";
import baseStyles from "@/styles/baseweight.css";
import basebearStyles from "@/styles/basebear.module.css";
import fontStyles from "@/styles/fonts.module.css";
import iconographyStyles from "@/styles/iconography.module.css";
import Yap from "@/components/YapYapYap";
import Guy from "@/components/guy/CavingGuy";
import { svgScale } from "@/app/scripts/utils/svgscalingfix";

// Munge
const styles = { ...baseStyles, ...iconographyStyles, ...fontStyles, ...basebearStyles };


export default function BaseBear() {
  const [windowWidth, setWindowWidth] = useState(0);

  // Update the window width on resize
  useEffect(() => {
    // Ensure this runs only in the browser
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      // Cleanup on unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  // Calculate the scale dynamically based on the window width
  const scaleFactor = Math.min(windowWidth / 600, 1); // Assuming 1920px as base width
  const scaleValue = svgScale(scaleFactor); // This generates the scale transform string

  return (
    <>
      <div
        className="basebear mx-auto flex flex-col items-center"
        style={{
          transform: scaleValue, // Use the transform string here
          transformOrigin: "top center",
          width: `${scaleFactor * 100}%`, // Use scaleFactor directly here
          maxWidth: "100%",
        }}
      >

        <section className="c-canvas bg-[#f3e4c1] w-full flex flex-col items-center relative">
          <div className="c-poster">
            {/* SVG Header */}
            <header className="w-full flex justify-center items-center p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                width="50"
                height="50"
                role="img"
                className="inline"
              />
            </header>

            {/* Main Content */}
            <div className="c-poster__main">
              {/* Bear Section */}
              <section className="o-bear">
                <div className="o-bear__head">
                  {/* Ears */}
                  <div className="o-bear__ears">
                    <div className="o-bear__ear o-bear__ear--left"></div>
                    <div className="o-bear__ear o-bear__ear--right"></div>
                  </div>
                  {/* Face */}
                  <div className="o-bear__face">
                    <div className="o-bear__eyes">
                      <div className="o-bear__eye o-bear__eye--left"></div>
                      <div className="o-bear__eye o-bear__eye--right"></div>
                    </div>
                    <div className="o-bear__nose">
                      <div className="o-bear__nostril o-bear__nostril--top"></div>
                      <div className="o-bear__nostril o-bear__nostril--bottom"></div>
                    </div>
                  </div>
                  <div className="o-bear__fur o-bear__fur--top o-bear__fur--top-left"></div>
                  <div className="o-bear__fur o-bear__fur--top o-bear__fur--top-right"></div>
                  <div className="o-bear__fur o-bear__fur--center"></div>
                  <div className="o-bear__fur o-bear__fur--bottom o-bear__fur--bottom--left"></div>
                  <div className="o-bear__fur o-bear__fur--bottom o-bear__fur--bottom--center"></div>
                  <div className="o-bear__fur o-bear__fur--bottom o-bear__fur--bottom--right"></div>


                </div>
              </section>

              {/* Decorations */}
              <section className="c-decorations c-decorations--left">
                <div className="o-leaf o-leaf--top"></div>
                <div className="o-spruce o-spruce--black"></div>
                <div className="o-spruce o-spruce--orange">
                  <i className="o-spruce__bottom-triangle"></i>
                </div>
                <div className="o-leaf o-leaf--center"></div>
                <div className="o-leaf o-leaf--bottom"></div>
                <div className="o-triangle"></div>
              </section>
              <section className="c-decorations c-decorations--right">
                <div className="o-leaf o-leaf--top"></div>
                <div className="o-spruce o-spruce--black"></div>
                <div className="o-spruce o-spruce--orange">
                  <i className="o-spruce__bottom-triangle"></i>
                </div>
                <div className="o-leaf o-leaf--center"></div>
                <div className="o-leaf o-leaf--bottom"></div>
                <div className="o-triangle"></div>
              </section>
            </div>

            {/* Footer */}
            <section className="c-poster__footer">
              <h1 className="c-poster__title">Mendel is the best</h1>
              <h2 className="c-poster__sub-title">ml on the edge</h2>
            </section>
            {/* Extra Content */}
            <Guy />
            <div className="hey`">
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
