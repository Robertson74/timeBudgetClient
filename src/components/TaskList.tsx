import * as React from "react";

interface TaskListProps {
  name: string;
};


export class TaskList extends React.Component<TaskListProps> {

  public render(): JSX.Element {
    const tasks: string[] = this.getTasks();
    return (
      <div>
      <p>test</p>
      <ul>
      { this.getTasks().map((el: string) => { return <li>{el}</li> }) }
      </ul>
      </div>
    );
  }

  public getTasks(): string[] {
    const toDoList: string[] = [ "task1", "task2", "task3" ];
    return toDoList;
  }

}
