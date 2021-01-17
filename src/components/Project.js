import React from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { color, size } from "../theme";

export default ({
  active = false,
  notification = false,
  title,
  code,
  onClick,
}) => {
  const mediaQuery = window.matchMedia("(min-width: 768px)");

  return (
    <div style={style.projectWrapper} onClick={onClick}>
      <div style={active ? style.projectWrapperLine : null}>
        <div style={style.projectInnerWrapper}>
          <h3 style={{ color: color.white }}>{code}</h3>
          {notification && (
            <FiberManualRecordIcon
              style={style.notification(mediaQuery.matches)}
            />
          )}
        </div>
      </div>
      <p style={style.projectTitle}>{title}</p>
    </div>
  );
};

const style = {
  projectWrapper: {
    width: `${100 / 3}%`,
    height: 120,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: size.big,
  },
  projectWrapperLine: {
    height: 80,
    width: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: size.medium,
    border: "2px solid",
    borderColor: "tomato",
  },
  projectInnerWrapper: {
    width: 70,
    height: 70,
    backgroundColor: "tomato",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: size.small,
  },
  projectTitle: {
    marginTop: size.small,
    color: color.grey,
    fontSize: size.small,
    fontWeight: "500",
  },
  notification: (isMobile) => ({
    marginTop: -56,
    marginRight: -28,
    color: color.white,
  }),
};
