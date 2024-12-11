import React from "react";
import { AppBar } from "../AppBar/AppBar";
import { Avatar } from "../Avatar/Avatar";
import { Card } from "../Card/Card";
import { Line5 } from "../Line5/Line5";
import { TableTennis21 } from "../TableTennis21/TableTennis21";
import image from "./image.png";
import maskGroup from "./mask-group.png";
import "./style.css";

export default function SinglePlayerBoard  ()  {
  return (
    <div className="single-player-board">
      <AppBar appbarVariant="default" className="app-bar-instance" />
      <div className="frame-5">
        <div className="frame-6">
          <div className="frame-7">
            <div className="frame-8">
          
              <img className="mask-group" alt="Mask group" src={maskGroup} />

              <Card cardVariant="default" />
            </div>

            <div className="frame-9">
              <div className="text-wrapper">2</div>

              <div className="text-wrapper-2">0</div>
            </div>
          </div>

          <div className="frame-10">
            <div className="frame-11">
            <TableTennis21 className="table-tennis" />
              <img className="mask-group-2" alt="Mask group" src={image} />

              <div className="frame-12">
                <div className="frame-13">
                  <div className="text-wrapper-3">0</div>

                  <Line5 className="line-5" />
                  <div className="text-wrapper-4">0</div>

                  <Line5 className="line-5" />
                  <div className="text-wrapper-4">0</div>

                  <Line5 className="line-5" />
                  <div className="text-wrapper-4">0</div>

                  <Line5 className="line-5" />
                  <div className="text-wrapper-5">0</div>
                </div>

                <div className="frame-14">
                  <div className="text-wrapper-6">WANG</div>

                  <div className="frame-15">
                    <div className="text-wrapper-7">CHUQUIN</div>

                    <Avatar
                      avatarVariant="default"
                      className="avatar-instance"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="frame-9">
              <div className="text-wrapper">0</div>

              <div className="text-wrapper-2">0</div>
            </div>
          </div>

          <div className="div-wrapper">
            <p className="p">Men’s Singles Round of 16</p>
          </div>
        </div>

       
      </div>
    </div>
  );
};
