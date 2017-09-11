// Remember to rename the file from app.ts to app.tsx
// and to keep it in the src/ directory.

import * as React from "react";
import * as ReactDOM from "react-dom";
import { TaskList } from "./components/TaskList";

ReactDOM.render(
  <TaskList name="Willson" />,
  document.getElementById("root")
);
