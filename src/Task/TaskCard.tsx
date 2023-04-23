import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { TaskType } from "../constants";
import { TaskAddInput } from "./TaskAddInput";
import { TaskCardDeleteButton } from "./TaskCardDeleteButton";
import { TaskCardTitle } from "./TaskCardTitle";
import { Tasks } from "./Tasks";

export const TaskCard = () => {
  const [inputText, setInputText] = useState("");
  const [TaskList, setTaskList] = useState<TaskType[]>([]);
  return (
    <>
      <Box w={"250px"} p={"10px"} m={"10px"} bgColor={"gray.200"}>
        <TaskCardTitle />
        <TaskCardDeleteButton />
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
