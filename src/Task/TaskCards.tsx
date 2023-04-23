import { Flex } from "@chakra-ui/react";
import { useState } from "react";
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
  return (
    <>
      <Flex align={"center"}>
        {taskCardList.map((item) => (
          <TaskCard
            item={item}
            setTaskCardList={setTaskCardList}
            taskCardList={taskCardList}
            key={item.id}
          />
        ))}
        <AddTaskCardButton
          taskCardList={taskCardList}
          setTaskCardList={setTaskCardList}
        />
      </Flex>
    </>
  );
};
