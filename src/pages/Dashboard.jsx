import Navbar from "../components/Navbar";
import "../styles/Dashboard.css";
import { useState, useEffect } from "react";
import API from "../api/api";

function Dashboard() {

  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]);

  // Fetch tasks
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {

      const response = await API.get("/tasks");

      setTasks(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  // Add Task
  const handleAddTask = async () => {

    if (!title) return;

    try {

      await API.post("/tasks", {
        title,
        completed: false
      });

      setTitle("");

      fetchTasks();

    } catch (error) {

      console.log(error);

    }
  };

  // Delete Task
  const handleDeleteTask = async (id) => {

    try {

      await API.delete(`/tasks/${id}`);

      fetchTasks();

    } catch (error) {

      console.log(error);

    }

  };

  // Edit Task
  const handleEditTask = async (task) => {

    const updatedTitle = prompt(
      "Edit Task",
      task.title
    );

    if (!updatedTitle) return;

    try {

      await API.put(`/tasks/${task._id}`, {
        ...task,
        title: updatedTitle
      });

      fetchTasks();

    } catch (error) {

      console.log(error);

    }

  };

  // Mark Complete
  const handleToggleComplete = async (task) => {

    try {

      await API.put(`/tasks/${task._id}`, {
        ...task,
        completed: !task.completed
      });

      fetchTasks();

    } catch (error) {

      console.log(error);

    }

  };

  return (
    <>
      <Navbar />

      <div className="dashboard">

        {/* Stats Section */}
        <div className="stats-container">

          <div className="stat-card purple">
            <h2>{tasks.length}</h2>
            <p>Total Tasks</p>
          </div>

          <div className="stat-card blue">
            <h2>
              {tasks.filter(task => task.completed).length}
            </h2>
            <p>Completed</p>
          </div>

          <div className="stat-card pink">
            <h2>
              {tasks.filter(task => !task.completed).length}
            </h2>
            <p>Pending</p>
          </div>

        </div>

        {/* Add Task */}
        <div className="add-task">

          <input
            type="text"
            placeholder="What's your next mission?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <button onClick={handleAddTask}>
            Add Task
          </button>

        </div>

        {/* Task Cards */}
        <div className="task-grid">

          {tasks.map((task) => (

            <div className="task-card" key={task._id}>

              <h3>{task.title}</h3>

              <div className="task-actions">

                <button
                  className="edit-btn"
                  onClick={() => handleEditTask(task)}
                >
                  Edit
                </button>

                <button
                  className="complete-btn"
                  onClick={() => handleToggleComplete(task)}
                >
                  {task.completed ? "Completed" : "Mark Done"}
                </button>

                <button
                  className="delete-btn"
                  onClick={() => handleDeleteTask(task._id)}
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </>
  );
}

export default Dashboard;
