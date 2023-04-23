import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { AddTaskCardButton } from "../addButton/AddTaskCardButton";
import { TaskCardType } from "../constants";
import { TaskCard } from "./TaskCard";

export const TaskCards = () => {
  const [taskCardList, setTaskCardList] = useState<TaskCardType[]>([]);
  return (
    <>
      <Flex align={"center"}>
        <TaskCard />
        <AddTaskCardButton
          taskCardList={taskCardList}
          setTaskCardList={setTaskCardList}
        />
      </Flex>
    </>
  );
};
