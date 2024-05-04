import React, { useEffect, useState } from "react";
import { data } from "../data/dummy_data";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store/user_store";
import TodoCard from "../components/todo_card";
import "./home.scss";
import TODO_APIs from "../api/todo_api";
import { useTodoStore } from "../store/todo_store";
import LoadingEffect from "../utils/loading/loading";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useUserStore();
  const { todos, setTodoList } = useTodoStore();
  const [totalDone, setTotalDone] = useState<number>(0);
  const [totalUpcoming, setTotalUpcoming] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchAllUserTodos = async () => {
      try {
        setLoading(true);
        await TODO_APIs.all_your_todos(user?.token as string).then(
          (response) => {
            // console.log("all your todo: ", response.data);
            setTodoList(response.data.todos);
            // console.log("store todos: ", todos)
          }
        );
      } catch (error) {
        alert(String(error));
      } finally {
        setLoading(false);
      }
    };

    setTotalDone(todos.filter((item) => item.Status == "done").length);
    setTotalUpcoming(todos.filter((item) => item.Status == "upcoming").length);

    fetchAllUserTodos();
  }, []);

  return (
    <div>
      <button className="addtodo_btn" onClick={() => navigate("/add")}>
        Add New todo
      </button>
      <div>
        {loading ? (
          <LoadingEffect />
        ) : (
          <div className="home">
            <section className="upcoming_section">
              <div>
                <p style={{ color: "red" }}>{totalUpcoming} : Upcoming Todo</p>
                <hr style={{ margin: "5px 0px 20px 0px" }} />
              </div>
              <div className="upcoming_container">
                {/* only upcomming */}
                {todos
                  .filter((item) => item.Status == "upcoming")
                  .map((todo) => (
                    <TodoCard
                      key={todo._id}
                      _id={todo._id}
                      Name={todo.Name}
                      Short_Description={todo.Short_Description}
                      Status={todo.Status}
                      Deadline={todo.Deadline}
                      User={todo.User}
                      createdAt={todo.createdAt}
                      updatedAt={todo.updatedAt}
                      __v={0}
                    />
                  ))}
              </div>
            </section>
            <section className="completed_section">
              <div>
                <p style={{ color: "green" }}>{totalDone} : Done Todo</p>
                <hr style={{ margin: "5px 0px 20px 0px" }} />
              </div>
              <div className="completed_container">
                {/* only completed */}
                {data
                  .filter((item) => item.Status == "done")
                  .map((todo) => (
                    <TodoCard
                      key={todo.id}
                      _id={todo.id}
                      Name={todo.Name}
                      Short_Description={todo.Short_Description}
                      Status={todo.Status}
                      Deadline={todo.Deadline}
                      User={todo.User}
                      createdAt={todo.createdAt}
                      updatedAt={todo.updatedAt}
                      __v={0}
                    />
                  ))}
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
