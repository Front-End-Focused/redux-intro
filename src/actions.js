import * as actions from "./actionTypes";

export function tasksAdd({ id, title, assignee, status }) {
  return {
    type: actions.TASKS_ADD,
    payload: {
      id,
      title,
      assignee,
      status,
    },
  };
}

export function tasksUpdate({ id, status }) {
  return {
    type: actions.TASKS_UPDATE_STATUS,
    payload: {
      id,
      status,
    },
  };
}
