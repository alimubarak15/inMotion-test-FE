import React from "react";
import CheckIcon from "@material-ui/icons/Check";
import { color, size } from "../theme";

export default ({ isDone, text, status }) => {
  let statusColor = {};
  if (status === "Approved") {
    statusColor = { bg: color.cyanSecondary, text: color.cyan };
  }
  if (status === "Waiting") {
    statusColor = { bg: color.greySecondary, text: color.grey };
  }
  if (status === "In Progress") {
    statusColor = { bg: color.blueSecondary, text: color.blue };
  }
  if (status === "In Review") {
    statusColor = { bg: color.brownSecondary, text: color.brown };
  }

  return (
    <div style={style.container}>
      <div style={style.wrapper(isDone)}>
        <CheckIcon style={style.checkIcon} />
      </div>
      <p style={style.text}>{text}</p>
      <div style={style.button(statusColor)}>
        <p style={style.buttonText(statusColor)}>{status}</p>
      </div>
    </div>
  );
};

const style = {
  container: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    margin: `${size.small}px 0`,
  },
  wrapper: (isChecked) => ({
    width: size.medium,
    height: size.medium,
    border: "1px solid",
    borderColor: color.cyan,
    backgroundColor: isChecked ? color.cyan : color.white,
    borderRadius: size.medium / 2,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    marginRight: size.medium,
  }),
  checkIcon: { fontSize: size.small, color: color.white },
  text: {
    flex: 0.75,
    fontSize: size.big / 2,
    fontWeight: "600",
    color: color.blackSecondary,
  },
  button: (colors) => ({
    width: size.huge * 3.5,
    height: size.big,
    backgroundColor: colors.bg,
    borderRadius: size.big / 2,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flex: 0.25,
  }),
  buttonText: (colors) => ({
    color: colors.text,
    fontWeight: "700",
    fontSize: 9,
  }),
};
