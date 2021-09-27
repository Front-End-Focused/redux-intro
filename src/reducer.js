import * as actions from "./actionTypes";

const initialState = {
  tasks: [],
};

const taskModel = ({ id, title, assignee, status }) => ({
  id,
  title,
  ...(assignee ? { assignee, status } : { assignee: null, status: "Pending" }),
});

function tasksReducer(state = initialState, action) {
  if (action.type === actions.TASKS_ADD) {
    return {
      ...state,
      tasks: [...state.tasks, taskModel(action.payload)],
    };
  }
  if (action.type === actions.TASKS_UPDATE_STATUS) {
    const { id, status } = action.payload;
    const newTask = state.tasks.find((task) => task.id === id);
    newTask.status = status;
    const newState = state.tasks.filter((task) => task.id !== id);
    return {
      ...state,
      tasks: [newTask, ...newState],
    };
  }
  return state;
}

export default tasksReducer;
