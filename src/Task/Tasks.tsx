import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { TaskType } from "../constants";
import { Task } from "./Task";

type Props = {
  TaskList: TaskType[];
  setTaskList: (value: TaskType[]) => void;
};

export const Tasks: FC<Props> = ({ TaskList, setTaskList }) => {
  const handleDragEnd = (result: DropResult) => {
    const remove = TaskList.splice(result.source.index, 1);
    if (result.destination) {
      TaskList.splice(result.destination.index, 0, remove[0]);
      setTaskList(TaskList);
    }
  };

  return (
    <>
      <Box>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {TaskList.map((task, index) => (
                  <Task
                    index={index}
                    key={task.id}
                    setTaskList={setTaskList}
                    TaskList={TaskList}
                    task={task}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Box>
    </>
  );
};
