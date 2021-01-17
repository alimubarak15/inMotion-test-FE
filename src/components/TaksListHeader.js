import React from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { size } from "../theme";
import { Divider } from "@material-ui/core";

export default ({ title, withMarginBottom = false }) => {
  return (
    <div style={withMarginBottom ? { marginTop: size.huge * 1.5 } : null}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: size.small,
        }}
      >
        <h3>{title}</h3>
        <MoreHorizIcon />
      </div>
      <Divider />
    </div>
  );
};
