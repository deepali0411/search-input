import React from "react";
import HighlightedText from "../highlightedText/HighlightedText";

import styles from "./userCard.module.scss";

const UserCard = ({ cardData, searchValue }) => {
  return (
    <div className={styles.container}>
      <HighlightedText
        text={cardData.id}
        search={searchValue}
        className={styles.id}
      />
      <HighlightedText
        text={cardData.name}
        search={searchValue}
        className={styles.name}
      />
      {cardData.items.some((data) =>
        data.toLowerCase().includes(searchValue.toLowerCase())
      ) && (
        <ul style={{ paddingLeft: "2rem", margin: "0.4rem 0" }}>
          <li className={styles.found}>
            <span className={styles.foundItem}>{searchValue}</span>
            found in items
          </li>
        </ul>
      )}
      <HighlightedText
        text={cardData.address}
        search={searchValue}
        className={styles.address}
      />
    </div>
  );
};
export default UserCard;
