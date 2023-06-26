import { Rating } from "@/components/Rating/Rating";
import React, { useReducer, useState } from "react";
import style from "./styles.module.scss";

const initialState = {
  name: "",
  text: "",
  rating: 5,
};

// action = {type, payload}
const reducer = (state, { type, payload } = {}) => {
  switch (type) {
    case "changeName": {
      return { ...initialState, name: payload };
    }
    case "changeText": {
      return { ...state, text: payload };
    }
    case "changeRating": {
      if (payload === "" || (Number(payload) <= 5 && Number(payload) >= 1)) {
        return { ...state, rating: payload };
      }
    }
    default:
      return state;
  }
};

export const NewReviewForm = () => {
  const [form, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <h3 className="title">Feadback</h3>
        <div className={style.field}>
          <label className={style.label}>Name</label>
          <input
            className="input-field"
            value={form.name}
            onChange={(event) =>
              dispatch({ type: "changeName", payload: event.target.value })
            }
          />
        </div>
      </div>
      <div>
        <div className={style.field}>
          <label className={style.label}>Text</label>
          <input
            className="input-field"
            value={form.text}
            onChange={(event) =>
              dispatch({ type: "changeText", payload: event.target.value })
            }
          />
        </div>
      </div>
      <div className={style.field}>
        <label className={style.label}>Rating</label>
        <Rating
          value={form.rating}
          onChange={(value) =>
            dispatch({ type: "changeRating", payload: value })
          }
        />
      </div>
    </div>
  );
};
