import React from "react";
import { color, size } from "../theme";

export default () => {
  const mediaQuery = window.matchMedia("(min-width: 768px)");
  return (
    <div style={mediaQuery.matches ? style.webView : style.mobileView}>
      <div style={style.buttonContainer}>
        <p style={style.textButton}>+</p>
      </div>
    </div>
  );
};

const style = {
  buttonContainer: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    backgroundColor: color.pulple,
    borderRadius: size.small,
  },
  textButton: {
    color: color.white,
    fontWeight: "400",
    fontSize: size.big,
    marginBottom: 4,
  },
  mobileView: {
    position: "absolute",
    top: 235,
    right: 60,
  },
  webView: {
    position: "absolute",
    bottom: size.huge * 2.8,
    right: size.huge * 5.8,
  },
};
