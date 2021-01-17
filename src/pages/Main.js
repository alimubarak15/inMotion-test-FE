import axios from "axios";
import React, { useState } from "react";
import LeftSide from "../containers/LeftSide";
import RightSide from "../containers/RightSide";
import { color, size } from "../theme";

export default () => {
  const mediaQuery = window.matchMedia("(min-width: 768px)");
  return (
    <div style={style.container}>
      <div style={style.wrapper(!mediaQuery.matches)}>
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
};

const style = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.background,
    minHeight: "100vh",
  },
  wrapper: (isMobile) => ({
    width: isMobile ? "100vw" : "80vw",
    height: isMobile ? "100vh" : "85vh",
    backgroundColor: color.black,
    borderRadius: isMobile ? null : size.medium,
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
  }),
};
