import PropTypes from "prop-types";
import React from "react";
import "./table.css";

export const Table = ({ tableVariant, className }) => {
  return (
    <div className={`table ${className}`}>
      <div className="frame">
        <div className="div">
          <div className="frame-2">
            <div className="frame-3">
              <img src="./HarimotoImage.png" alt="Mask group" />

              <div className="frame-4">
                <div className="frame-5">
                  <div className="text-wrapper">HARIMOTO</div>

                  <div className="frame-6">
                    <div className="text-wrapper-2">TOMOKAZU</div>

                    <img src="./image 4.png" alt="Image" />
                  </div>
                </div>

                <div className="frame-7">
                  <div className="element-synthetic-clone">2</div>

                  <img className="line" alt="Line" />

                  <div className="element-synthetic-clone">0</div>

                  <img className="line" alt="Line" />

                  <div className="element-synthetic-clone">0</div>

                  <img className="line" alt="Line" />

                  <div className="element-synthetic-clone">0</div>

                  <img className="line" alt="Line" />

                  <div className="element-synthetic-clone">0</div>
                </div>
              </div>
            </div>

            <div className="frame-8">
              <div className="element-synthetic-clone-2">2</div>

              <div className="element-synthetic-clone-3">0</div>
            </div>
          </div>

          <div className="frame-9">
            <div className="frame-10">
              <div className="frame-11">
              <img src="./WangImage.png" alt="Mask group" />

                <div className="frame-4">
                  <div className="frame-7">
                    <div className="element-synthetic-clone-4">0</div>

                    <img className="line" alt="Line" />

                    <div className="element-synthetic-clone">0</div>

                    <img className="line" alt="Line" />

                    <div className="element-synthetic-clone">0</div>

                    <img className="line" alt="Line" />

                    <div className="element-synthetic-clone">0</div>

                    <img className="line" alt="Line" />

                    <div className="element-synthetic-clone">0</div>
                  </div>

                  <div className="frame-12">
                    <div className="text-wrapper">WANG</div>

                    <div className="frame-6">
                      <div className="text-wrapper-2">CHUQUIN</div>

                      <img src="./image 5.png" alt="Image" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="frame-8">
                <div className="element-synthetic-clone-2">0</div>

                <div className="element-synthetic-clone-3">0</div>
              </div>
            </div>

            <img src="./table-tennisbat.png" alt="Table tennis" />

            <div className="frame-13">
              <div className="TABLE-synthetic">TABLE 1</div>

              <div className="men-s-singles-round-wrapper">
                <p className="men-s-singles-round">Men’s Singles Round of 16</p>
              </div>
            </div>
          </div>
        </div>

        <div className="div">
          <div className="frame-2">
            <div className="frame-3">
            <img src="./HarimotoImage.png" alt="Mask group" />

              <div className="frame-4">
                <div className="frame-12">
                  <div className="text-wrapper">JANG</div>

                  <div className="frame-6">
                    <div className="text-wrapper-2">WOOLIN</div>

                    <img src="./image 4.png" alt="Image" />
                  </div>
                </div>

                <div className="frame-7">
                  <div className="element-synthetic-clone">1</div>

                  <img className="line" alt="Line" />

                  <div className="element-synthetic-clone">0</div>

                  <img className="line" alt="Line" />

                  <div className="element-synthetic-clone">0</div>

                  <img className="line" alt="Line" />

                  <div className="element-synthetic-clone">0</div>

                  <img className="line" alt="Line" />

                  <div className="element-synthetic-clone">0</div>
                </div>
              </div>
            </div>

            <div className="frame-8">
              <div className="element-synthetic-clone-2">1</div>

              <div className="element-synthetic-clone-3">0</div>
            </div>
          </div>

          <div className="frame-9">
            <div className="frame-10">
              <div className="frame-11">
              <img src="./WangImage.png" alt="Mask group" />

                <div className="frame-4">
                  <div className="frame-7">
                    <div className="element-synthetic-clone-4">1</div>

                    <img className="line" alt="Line" />

                    <div className="element-synthetic-clone">0</div>

                    <img className="line" alt="Line" />

                    <div className="element-synthetic-clone">0</div>

                    <img className="line" alt="Line" />

                    <div className="element-synthetic-clone">0</div>

                    <img className="line" alt="Line" />

                    <div className="element-synthetic-clone">0</div>
                  </div>

                  <div className="frame-12">
                    <div className="text-wrapper">MA</div>

                    <div className="frame-6">
                      <div className="text-wrapper-2">LONG</div>
                      <img src="./image 5.png" alt="Image" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="frame-8">
                <div className="element-synthetic-clone-2">1</div>

                <div className="element-synthetic-clone-3">0</div>
              </div>
            </div>

            <img src="./table-tennisbat.png" alt="Table tennis" />

            <div className="frame-13">
              <div className="TABLE-synthetic">TABLE 2</div>

              <div className="men-s-singles-round-wrapper">
                <p className="men-s-singles-round">Men’s Singles Round of 16</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Table.propTypes = {
  tableVariant: PropTypes.oneOf(["default"]),
};
