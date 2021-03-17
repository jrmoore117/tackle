import React from "react";
import PropTypes from "prop-types";

const List = ({ items, color, onClick, className, ...props }) => (
  <ul className={className} {...props}>
    {items.map((item, i) => (
      <li
        className={`${i !== items.length - 1 ? "listitem" : "listitem--last"} ${
          color ? `hover:text-${color}-500` : ""
        }`}
        onClick={() => onClick(item, i)}
        key={`item-${i}`}
      >
        {item.label}
      </li>
    ))}
  </ul>
);

List.defaultProps = {
  variant: "default",
  color: "blue",
};

List.propTypes = {
  variant: PropTypes.string,
  label: PropTypes.string,
};

export default List;
