import React from "react";
import styles from "./Home.module.css";
import iconEdit from "../../img/icon-edit.svg";
import iconDelete from "../../img/icon-delete.svg";
import { useFirestore } from "../../hooks/useFirestore";

export default function DiaryList({ diaries }) {
  const { deleteDocument } = useFirestore("diary");

  function formattingTime(seconds) {
    // seconds가 유효한지 확인
    if (!seconds || typeof seconds !== "number") {
      return "날짜 없음";
    }

    const date = new Date(seconds * 1000);

    // 유효한 날짜인지 확인
    if (isNaN(date.getTime())) {
      return "날짜 없음";
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const dayOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][
      date.getDay()
    ];

    const formattedDate = `${year}.${month}.${day}.${dayOfWeek}`;
    return formattedDate;
  }

  return (
    <>
      {diaries.map((item) => {
        return (
          <li key={item.id}>
            <article className={styles["diary-article"]}>
              <h3 className={styles["article-title"]}>{item.title}</h3>
              <time
                className={styles["article-time"]}
                dateTime={
                  item.createdTime?.seconds
                    ? formattingTime(item.createdTime.seconds)
                        .replaceAll(".", "-")
                        .slice(0, -4)
                    : ""
                }
              >
                {item.createdTime?.seconds
                  ? formattingTime(item.createdTime.seconds)
                  : "날짜 없음"}
              </time>
              <p className={styles["article-content"]}>{item.text}</p>

              <div className={styles["button-group"]}>
                <button type="button">
                  <img src={iconEdit} alt="수정" />
                </button>
                <span></span>
                <button type="button" onClick={() => deleteDocument(item.id)}>
                  <img src={iconDelete} alt="삭제" />
                </button>
              </div>
            </article>
          </li>
        );
      })}
    </>
  );
}
