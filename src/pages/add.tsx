import React from "react";
import "./add.scss";
import DateLocale from "../utils/date_time/date";
import TimeLocale from "../utils/date_time/time";

const AddPage: React.FC = () => {
  return (
    <div className="add_page">
      <p className="heading">Add Todo</p>
      <div className="add_container">
        <form action="" className="add_form">
          <input
            required
            type="text"
            placeholder="Today I will....."
            className="title"
          />
          <textarea
            required
            name="Short_Description"
            placeholder="Please write very short description...."
            className="description"
          />
          <div className="status">
            <label>Status: &nbsp; &nbsp;</label>
            <select name="status">
              <option value="upcoming">upcoming</option>
              <option value="done">done</option>
            </select>
          </div>

          <div className="deadline_pick">
            Pick Deadline: &nbsp;&nbsp;
            <input type="date" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="time" />
          </div>

          <p className="today">
            Today: <DateLocale />, <TimeLocale />
          </p>

          <button
            className="add_it_btn"
            onSubmit={() => {
              console.log("onSubmit");
            }}
          >
            Add it
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPage;
