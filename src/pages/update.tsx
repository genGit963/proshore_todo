import React from "react";
import "./update.scss";
import { data } from "../data/dummy_data";
import { TodoInterface } from "../models/todo";
import DateLocale from "../utils/date_time/date";
import TimeLocale from "../utils/date_time/time";

const UpdatePage: React.FC = () => {
  const updateTodo: TodoInterface = data[2];

  // const
  return (
    <div className="update_page">
      <p className="heading">Update Todo</p>
      <div className="update_container">
        <form action="" className="update_form">
          <input
            required
            type="text"
            placeholder="Title"
            className="title"
            defaultValue={updateTodo.Name}
          />
          <textarea
            required
            name="Short_Description"
            placeholder="Please write very short description...."
            className="description"
            defaultValue={updateTodo.Short_Description}
          />
          <div className="status">
            <label>Status: &nbsp; &nbsp;</label>
            <select name="status" defaultValue={updateTodo.Status}>
              <option value="upcoming">upcoming</option>
              <option value="done">done</option>
            </select>
          </div>
          <div className="deadline_pick">
            Pick Deadline: &nbsp;&nbsp;
            <input
              type="date"
              defaultValue={updateTodo.Deadline.toDateString()}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="time" />
          </div>
          <div className="today">
            <DateLocale />, <TimeLocale />
          </div>
          <button
            className="add_it_btn"
            onSubmit={() => {
              console.log("onSubmit");
            }}
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePage;
