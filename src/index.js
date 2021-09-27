import { createStore } from "redux";
import { tasksAdd, tasksUpdate } from "./actions";
import tasksReducer from "./reducer";

const store = createStore(
  tasksReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(
  tasksAdd({ id: 1, title: "task #1", assignee: "Mahmoud", status: "Assigned" })
);

store.dispatch(
  tasksAdd({ id: 2, title: "task #2", assignee: "Mahmoud", status: "Assigned" })
);

store.dispatch(
  tasksAdd({ id: 3, title: "task #3", assignee: "Mahmoud", status: "Assigned" })
);

store.dispatch(tasksAdd({ id: 4, title: "task #4" }));

store.dispatch(tasksUpdate({ id: 1, status: "InProgress" }));
