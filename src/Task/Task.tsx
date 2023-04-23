import { Button, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Draggable } from "react-beautiful-dnd";
import { TaskType } from "../constants";

type Props = {
  task: TaskType;
  TaskList: TaskType[];
  setTaskList: (value: TaskType[]) => void;
  index: number;
};

export const Task: FC<Props> = ({ task, TaskList, setTaskList, index }) => {
  const handleDelete = (id: string) => {
    setTaskList(TaskList.filter((item) => item.id !== id));
  };

  return (
    <>
      <Draggable index={index} draggableId={task.draggableId}>
        {(provided) => (
          <div
            key={task.id}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Flex
              bgColor={"white"}
              p={"5px"}
              border={"2px solid"}
              align={"center"}
              m={"8px"}
              justify={"space-between"}
            >
              <Text>{task.text}</Text>
              <Button onClick={() => handleDelete(task.id)}>削除</Button>
            </Flex>
          </div>
        )}
      </Draggable>
    </>
  );
};
