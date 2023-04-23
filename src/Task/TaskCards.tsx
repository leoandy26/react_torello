import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { AddTaskCardButton } from "../button/AddTaskCardButton";
import { TaskCardType } from "../constants";
import { TaskCard } from "./TaskCard";

export const TaskCards = () => {
  const [taskCardList, setTaskCardList] = useState<TaskCardType[]>([
    {
      id: "0",
      draggableId: "item",
    },
  ]);

  const handleDragEnd = (result: DropResult) => {
    const remove = taskCardList.splice(result.source.index, 1);
    if (result.destination) {
      taskCardList.splice(result.destination.index, 0, remove[0]);
      setTaskCardList(taskCardList);
    }
  };
  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <Flex align={"center"}>
                {taskCardList.map((item, index) => (
                  <TaskCard
                    index={index}
                    item={item}
                    setTaskCardList={setTaskCardList}
                    taskCardList={taskCardList}
                    key={item.id}
                  />
                ))}
                {provided.placeholder}
                <AddTaskCardButton
                  taskCardList={taskCardList}
                  setTaskCardList={setTaskCardList}
                />
              </Flex>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};
