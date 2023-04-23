import { Box, Flex } from "@chakra-ui/react";
import { FC, useState } from "react";
import { TaskCardDeleteButton } from "../button/TaskCardDeleteButton";
import { TaskCardType, TaskType } from "../constants";
import { TaskAddInput } from "./TaskAddInput";
import { TaskCardTitle } from "./TaskCardTitle";
import { Tasks } from "./Tasks";

type Props = {
  item: TaskCardType;
  setTaskCardList: (list: TaskCardType[]) => void;
  taskCardList: TaskCardType[];
};

export const TaskCard: FC<Props> = ({
  taskCardList,
  setTaskCardList,
  item,
}) => {
  const [inputText, setInputText] = useState("");
  const [TaskList, setTaskList] = useState<TaskType[]>([]);
  return (
    <>
      <Box w={"250px"} p={"10px"} m={"10px"} bgColor={"gray.200"}>
        <Flex justify={"space-between"}>
          <TaskCardTitle />
          <TaskCardDeleteButton
            taskCardList={taskCardList}
            setTaskCardList={setTaskCardList}
            item={item}
          />
        </Flex>
        <TaskAddInput
          inputText={inputText}
          setInputText={setInputText}
          TaskList={TaskList}
          setTaskList={setTaskList}
        />
        <Tasks setTaskList={setTaskList} TaskList={TaskList} />
      </Box>
    </>
  );
};
