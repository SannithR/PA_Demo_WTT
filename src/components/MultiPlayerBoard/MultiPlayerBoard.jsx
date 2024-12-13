import React from "react";
import { Table } from "../Table/Table";
import { Vector1 } from "../Vector1/Vector1";
import { Wtt } from "../Wtt/Wtt";
import logo from "./logo.png";
import "./style.css";

export default function MultiPlayerBoard ()  {
  return (
    <div className="multi-player-board">
      <div className="frame-14">
        <div className="logo-wrapper">
          <div className="logo">
            <img className="logo-2" alt="Logo" src={logo} />

            <Wtt className="WTT-instance" />
          </div>
        </div>

        <Vector1 className="vector" />
        <div className="frame-15">
          <p className="p">WTT FINALS MEN DOHA 2023</p>

          <p className="element-JANUARY-MAY">
            03 JANUARY - 05 MAY 2024&nbsp;&nbsp;|&nbsp;&nbsp;DOHA, QAT
          </p>
        </div>
      </div>

      <Table className="table-instance" tableVariant="default" />
    </div>
  );
};
