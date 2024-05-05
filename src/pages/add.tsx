import React, { useState } from "react";
import "./add.scss";
import DateLocale from "../utils/date_time/date";
import TimeLocale from "../utils/date_time/time";
import TODO_APIs from "../api/todo_api";
import { Todo } from "../models/todo";
import { useUserStore } from "../store/user_store";

const AddPage: React.FC = () => {
  const { user } = useUserStore();

  const [todoData, setTodoData] = useState<Todo>({
    Name: "",
    Short_Description: "",
    Deadline: new Date(),
    Status: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const handleSubmit = async () => {
    try {
      setLoading(true);
      await TODO_APIs.add_todos(user?.token as string, todoData).then(
        (respone) => {
          console.log("Respones: ", respone.data);
        }
      );
    } catch (error) {
      alert("Server error: !!\n\n" + String(error));
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="add_page">
      <p className="heading">Add Todo</p>
      <div className="add_container">
        <form onSubmit={handleSubmit} className="add_form">
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
            &nbsp;&nbsp;&nbsp;
            <input type="time" />
          </div>

          <p className="today">
            Today: <DateLocale />, <TimeLocale />
          </p>
          
          <button className="add_it_btn" type="submit">
            Add it
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPage;
