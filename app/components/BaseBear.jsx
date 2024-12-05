import React from 'react';
import Link from 'next/link';

export default function Basebear() {
  return (
    <div className="basebear mx-auto">
      <section className="c-canvas">
        <div className="c-poster">
          {/* MAIN */}
          <Link href="/">
            <div className="c-poster__main">
              {/* BEAR */}
              <section className="o-bear">
                {/* HEAD */}
                <div className="o-bear__head">
                  {/* EARS */}
                  <div className="o-bear__ears">
                    <div className="o-bear__ear o-bear__ear--left"></div>
                    <div className="o-bear__ear o-bear__ear--right"></div>
                  </div>
                  {/* FACE */}
                  <div className="o-bear__face">
                    {/* EYES */}
                    <div className="o-bear__eyes">
                      <div className="o-bear__eye o-bear__eye--left"></div>
                      <div className="o-bear__eye o-bear__eye--right"></div>
                    </div>
                    {/* NOSE */}
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
              {/* DECORATIONS */}
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
          </Link>
          {/* FOOTER */}
          <footer className="c-poster__footer">
            <h1 className="c-poster__title">Baseweight.ai</h1>
            <h2 className="c-poster__sub-title">ml on the edge</h2>
          </footer>
        </div>
      </section>
    </div>
  );
}
