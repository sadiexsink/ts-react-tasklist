import { Task } from "./Task";

type TaskList = {
  tasklist: string[];
  deleteTask: (index: number) => void;
};

export const TaskList = ({ tasklist, deleteTask }: TaskList) => {
  return (
    <div className="taskList">
      {tasklist.map((task, index) => (
        <Task key={index} task={task} deleteTask={() => deleteTask(index)}></Task>
      ))}
    </div>
  );
};
