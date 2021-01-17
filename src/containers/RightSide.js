import React from "react";
import TaksListHeader from "../components/TaksListHeader";
import ListItem from "../components/ListItem";
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import { color, size } from "../theme";
import AddButton from "../components/AddButton";
import { listUsers, listTodo } from "../mock";

export default () => {
  const mediaQuery = window.matchMedia("(min-width: 768px)");

  return (
    <div style={style.rightContainer(!mediaQuery.matches)}>
      <div style={style.wrapper}>
        <div style={style.innerWrapper(mediaQuery)}>
          <div style={style.somePadding(mediaQuery)}>
            <h2 style={{ color: color.blackSecondary }}>Cyber Punk</h2>
            <p style={style.caption}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.sit amet, consectetur adipiscing elit, sed do eiusmod.
            </p>
          </div>
          <div style={style.someMargin(mediaQuery)}>
            <AvatarGroup
              max={4}
              spacing={`${!mediaQuery.matches ? "medium" : "small"}`}
            >
              {listUsers.map((data, id) => (
                <Avatar key={id} alt={data.alt} src={data.src} />
              ))}
            </AvatarGroup>
          </div>
        </div>
      </div>
      <div className="hideScrollbar" style={style.taskContainer}>
        <TaksListHeader title="Today" />
        <div className="hideScrollbar" style={style.today(mediaQuery)}>
          {listTodo.map((data, id) => {
            if (data.isUpcooming) return null;
            return <ListItem key={id} {...data} />;
          })}
        </div>
        <TaksListHeader title="Upcoming" />
        <div className="hideScrollbar" style={style.upcoming(mediaQuery)}>
          {listTodo.map((data, id) => {
            if (!data.isUpcooming) return null;
            return <ListItem key={id} {...data} />;
          })}
        </div>
      </div>
      <AddButton />
    </div>
  );
};

const style = {
  rightContainer: (isMobile) => ({
    flex: 1,
    backgroundColor: color.white,
    margin: size.small,
    borderRadius: size.small,
    padding: `${size.huge}px ${size.huge}px`,
    border: isMobile ? "1px solid #aaa" : null,
  }),
  wrapper: {
    display: "flex",
    flex: 1,
    minHeight: 100,
  },
  innerWrapper: (mediaQuery) => ({
    flexDirection: !mediaQuery.matches ? "column-reverse" : "row",
    display: "flex",
  }),
  somePadding: (mediaQuery) => ({
    paddingRight: size.small,
    marginBottom: !mediaQuery.matches ? size.medium : null,
  }),
  someMargin: (mediaQuery) => ({
    marginBottom: !mediaQuery.matches ? size.medium : null,
  }),
  caption: {
    fontSize: size.small,
    color: color.grey,
    marginTop: size.small,
  },
  taskContainer: {
    minHeight: 500,
    overflow: "scroll",
  },
  today: (mediaQuery) => ({
    maxHeight: mediaQuery.matches ? 220 : null,
    overflow: "scroll",
  }),
  upcoming: (mediaQuery) => ({
    maxHeight: mediaQuery.matches ? 120 : null,
    overflow: "scroll",
  }),
};
