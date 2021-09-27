import * as actions from "./actionTypes";

const initialState = {
  tasks: [],
};

function tasksReducer(state = initialState, action) {
  if (action.type === actions.TASKS_ADD) {
    return {
      ...state,
      tasks: [...state.tasks, action.payload],
    };
  }
  if (action.type === actions.TASKS_UPDATE_STATUS) {
    const { id, status } = action.payload;
    return {
      ...state,
      tasks: [...state.tasks],
    };
  }
  return state;
}

export default tasksReducer;
