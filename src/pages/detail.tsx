import React from "react";
import "./detail.scss";
import { useNavigate } from "react-router-dom";
import TimeLocale from "../utils/date_time/time";
import DateLocale from "../utils/date_time/date";
import { useTodoStore } from "../store/todo_store";

const DetailPage: React.FC = () => {
  const { todo } = useTodoStore();
  // console.log("todo detail: ", todo);
  const navigate = useNavigate();
  return (
    <div className="detail_page">
      <p className="heading">Todo Detail</p>
      <hr style={{ marginBottom: "20px" }} />
      <div className="detail_container">
        <form action="" className="detail_form">
          <p className="title">{todo?.Name}</p>
          <p className="description"> {todo?.Short_Description}</p>

          <p className="status">
            Status:{" "}
            <span
              className={todo?.Status === "done" ? "span_done" : "span_upc"}
            >
              {todo?.Status}
            </span>
          </p>

          <p className="deadline">
            Deadline: <span>{new Date(todo?.Deadline as Date).toDateString()}</span>,{" "}
            <span>{new Date(todo?.Deadline as Date).toLocaleTimeString()}</span>
          </p>
          <p className="created">
            Created At: <span>{new Date(todo?.createdAt as Date).toDateString()}</span>,{" "}
            <span>{new Date(todo?.createdAt as Date).toLocaleTimeString()}</span>
          </p>
          <p className="updated">
            Update At : <span>{new Date(todo?.updatedAt as Date).toDateString()}</span>,{" "}
            <span>{new Date(todo?.updatedAt as Date).toLocaleTimeString()}</span>
          </p>

          <p className="today">
            Today: <DateLocale />, <TimeLocale />{" "}
          </p>

          <div className="button_cont">
            <button className="update_btn" onClick={() => navigate("/update")}>
              Update
            </button>
            <button
              className="delete_btn"
              onClick={() => console.log("proced deletion..")}
            >
              Delete
            </button>
            <button
              className="done_btn"
              onClick={() => console.log("procced completion..")}
            >
              Done
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DetailPage;
