import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { color, size } from "../theme";
import Project from "../components/Project";
import { projects } from "../mock";

export default function LeftSide() {
  const mediaQuery = window.matchMedia("(min-width: 768px)");
  const [more, setMore] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  return (
    <div style={style.leftContainer}>
      <div style={style.leftContainerWrapper(!mediaQuery.matches)}>
        <h1 style={style.leftContainerTitle}>Hi Samatha</h1>
        <p style={style.leftContainerCaption}>
          Welcome back to the workspace, we miss You!
        </p>
        <div style={style.leftContainerSearch(!mediaQuery.matches)}>
          <SearchIcon style={style.searchIcon} />
          <input
            style={style.searchInput}
            placeholder="Search Task or Project..."
          />
        </div>
        <h4 style={{ color: color.titleWhite, marginBottom: size.medium }}>
          Project{" "}
          <span style={{ color: color.grey, fontWeight: "500" }}>
            ({projects.length})
          </span>
        </h4>
        <div
          className="hideScrollbar"
          style={style.projectContainer(mediaQuery.matches)}
        >
          {projects.slice(0, more ? projects.length : 5).map((data, id) => (
            <Project
              key={id}
              notification={data.notification}
              title={data.title}
              code={data.code}
              onClick={() => setSelectedItem(data)}
              active={selectedItem.title === data.title}
            />
          ))}
          {more ? null : (
            <Project
              onClick={() => setMore(!more)}
              title="more"
              code={`+${projects.length - 5}`}
            />
          )}
        </div>
      </div>
    </div>
  );
}

const style = {
  leftContainer: {
    margin: size.small,
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  leftContainerWrapper: (isMobile) => ({
    display: "flex",
    flexDirection: "column",
    flex: 1,
    margin: `0px ${isMobile ? "40px" : "80px"}`,
  }),
  leftContainerTitle: {
    color: color.titleWhite,
    fontSize: size.huge,
    marginBottom: size.small,
    marginTop: size.big,
  },
  leftContainerCaption: {
    color: color.greySecondary,
    fontSize: size.medium,
    marginBottom: size.big * 2,
  },
  leftContainerSearch: (isMobile) => ({
    backgroundColor: color.blackSecondary,
    height: size.big * 2,
    display: "flex",
    flex: 1,
    alignItems: "center",
    borderRadius: size.medium,
    marginBottom: size.big,
    padding: isMobile ? "12px 0px" : null,
  }),
  searchIcon: {
    color: color.grey,
    fontSize: size.big,
    marginLeft: size.small,
  },
  searchInput: {
    width: "100%",
    height: 20,
    marginRight: size.small,
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    color: color.white,
    fontSize: size.medium,
    marginLeft: size.small,
  },
  projectContainer: (isMobile) => ({
    display: "flex",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "transparent",
    flexWrap: "wrap",
    height: isMobile ? 300 : null,
    overflow: isMobile ? "scroll" : null,
    scrollbarColor: "transparent",
    scrollbarWidth: 0,
  }),
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
  notification: {
    position: "absolute",
    alignSelf: "flex-end",
    marginTop: -44,
    paddingRight: 18,
    color: color.white,
  },
};
