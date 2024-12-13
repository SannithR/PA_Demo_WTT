import React from "react";
import { Frame379 } from "../Frame379/Frame379";
import { Frame380 } from "../Frame380/Frame380";
import { Line6 } from "../Line6/Line6";
import { Line7 } from "../Line7/Line7";
import { Line8 } from "../Line8/Line8";
import { Vector } from "../Vector/Vector";
import { Wtt } from "../Wtt/Wtt";
import group50 from "./group-50.png";
import group from "./group.png";
import image4 from "./image-4.png";
import image5 from "./image-5.png";
import logo from "./logo.png";
import minimizeSign1 from "./minimize-sign-1.png";
import plus11 from "./plus-1-1.png";
import "./style.css";

export default function MatchHub  () {
  return (
    <div className="match-hub">
      <div className="frame">
        <div className="group-wrapper">
          <div className="group">
            <div className="frame-wrapper">
              <div className="div-wrapper">
                <div className="div">
                  <div className="overlap-wrapper">
                    <div className="overlap">
                      <div className="frame-2">
                        <div className="logo-wrapper">
                          <div className="logo">
                            <img className="img" alt="Logo" src={logo} />

                            <Wtt className="WTT-instance" />
                          </div>
                        </div>

                        <div className="frame-3">
                          <div className="text-wrapper">12/06/24</div>

                          <div className="text-wrapper">09:40 AM</div>
                        </div>
                      </div>

                      <div className="overlap-group-wrapper">
                        <div className="overlap-group">
                          <div className="text-wrapper-2">Table 01</div>
                        </div>
                      </div>

                      <img className="group-2" alt="Group" src={group50} />

                      <img className="group-3" alt="Group" src={group} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="frame-4">
       

          <div className="frame-7">
          <div style={{display: 'flex'}}>
          <div className="frame-8">
          <div className="frame-9">
            <div className="frame-10">
              <div className="frame-3">
                <div className="frame-11">
                  <Vector className="vector-instance" />
                  <div className="frame-12">
                    <div className="group-4">
                      <div className="rectangle" />

                      <div className="rectangle-2" />

                      <div className="rectangle-3" />
                    </div>
                  </div>
                </div>

                <div className="text-wrapper-4">Score Edit</div>
              </div>

              <div className="text-wrapper-5">SSQ</div>
            </div>

            <div className="frame-13">
              <div className="text-wrapper-6">G1</div>
            </div>

            <div className="frame-13">
              <div className="text-wrapper-6">G2</div>
            </div>

            <div className="frame-13">
              <div className="text-wrapper-6">G3</div>
            </div>

            <div className="frame-13">
              <div className="text-wrapper-6">G4</div>
            </div>

            <div className="frame-14">
              <div className="text-wrapper-6">G5</div>
            </div>
          </div>

          <div className="frame-9">
            <div className="frame-15">
              <div className="text-wrapper-7">HARIMOTO Tomokazu</div>
            </div>

            <div className="frame-16">
              <div className="text-wrapper-6">2</div>
            </div>

            <div className="frame-17" />

            <div className="frame-17" />

            <div className="frame-17" />

            <div className="frame-18" />
          </div>

          <div className="frame-9">
            <div className="frame-15">
              <div className="text-wrapper-7">WANG Chuqin</div>
            </div>

            <div className="frame-16">
              <div className="text-wrapper-6">2</div>
            </div>

            <div className="frame-17" />

            <div className="frame-17" />

            <div className="frame-17" />

            <div className="frame-18" />
          </div>
        </div>
        <div className="frame-5">
        <div className="frame-6">
          <div className="text-wrapper-3">Let</div>
        </div>
      </div></div>
          

            <div className="frame-19">
              <div className="frame-20">
                <div className="frame-21">
                  <div className="text-wrapper-8">Cards</div>
                </div>

                <div className="frame-22">
                  <div className="group-5">
                    <div className="frame-23">
                      <div className="frame-24">
                        <div className="group-6">
                          <div className="overlap-group-2">
                            <Line6 className="line" />
                            <Line7 className="line-7" />
                          </div>
                        </div>
                      </div>

                      <div className="frame-25">
                        <div className="group-7">
                          <div className="frame-26">
                            <div className="frame-3">
                              <img className="image" alt="Image" src={image4} />

                              <div className="text-wrapper-9">PLAYER 1</div>
                            </div>

                            <div className="frame-27">
                              <div className="text-wrapper-10">HARIMOTO</div>

                              <div className="text-wrapper-11">TOMOKAZU</div>
                            </div>
                          </div>

                          <div className="frame-28">
                            <div className="group-8">
                              <div className="frame-29">
                                <div className="text-wrapper-10">WANG</div>

                                <div className="text-wrapper-12">CHUQIN</div>
                              </div>

                              <div className="frame-30">
                                <div className="text-wrapper-9">PLAYER 2</div>

                                <img
                                  className="image-2"
                                  alt="Image"
                                  src={image5}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="frame-31">
                      <Frame379 className="frame-379" />
                      <div className="text-wrapper-13">Receiver</div>
                    </div>

                    <div className="frame-32">
                      <Frame380 className="frame-380" />
                      <div className="text-wrapper-13">Server</div>
                    </div>
                  </div>
                </div>

                <div className="frame-21">
                  <div className="text-wrapper-8">Cards</div>
                </div>
              </div>

              <div className="frame-33">
                <div className="frame-34">
                  <div className="frame-35">
                    <div className="frame-36">
                      <div className="plus-wrapper">
                        <img className="plus" alt="Plus" src={plus11} />
                      </div>

                      <div className="minimize-sign-wrapper">
                        <img
                          className="minimize-sign"
                          alt="Minimize sign"
                          src={minimizeSign1}
                        />
                      </div>
                    </div>

                    <div className="frame-36">
                      <div className="img-wrapper">
                        <img
                          className="minimize-sign"
                          alt="Minimize sign"
                          src={minimizeSign1}
                        />
                      </div>

                      <div className="frame-37">
                        <img className="plus" alt="Plus" src={plus11} />
                      </div>
                    </div>
                  </div>

                  <div className="frame-38">
                    <div className="frame-39">
                      <div className="frame-40">
                        <div className="text-wrapper-14">0</div>
                      </div>

                      <div className="frame-41" />

                      <div className="frame-40">
                        <div className="text-wrapper-14">0</div>
                      </div>
                    </div>

                    <div className="frame-39">
                      <div className="frame-42">
                        <div className="text-wrapper-15">2</div>
                      </div>

                      <div className="frame-41" />

                      <div className="frame-42">
                        <div className="text-wrapper-15">2</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="frame-43">
                  <div className="frame-44">
                    <button className="button">
                      <div className="button-base">
                        <div className="text">Swap Sides</div>
                      </div>
                    </button>

                    <button className="button-base-wrapper">
                      <div className="button-base-2">
                        <div className="text">Expedite</div>
                      </div>
                    </button>
                  </div>

                  <Line8 className="line-8" />
                  <div className="frame-44">
                    <button className="button-base-wrapper">
                      <div className="button-base-3">
                        <div className="text">Next Game</div>
                      </div>
                    </button>

                    <button className="button-2">
                      <div className="button-base-4">
                        <div className="text">End Match</div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
