import { Box, Input } from "@chakra-ui/react";
import { FC } from "react";
import { TaskType } from "../constants";
import { v4 as uuid } from "uuid";

type Props = {
  inputText: string;
  setInputText: (value: string) => void;
  TaskList: TaskType[];
  setTaskList: (value: TaskType[]) => void;
};

export const TaskAddInput: FC<Props> = ({
  inputText,
  setInputText,
  TaskList,
  setTaskList,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const taskId = uuid();
    e.preventDefault();
    if (inputText === "") return;
    setTaskList([
      ...TaskList,
      {
        id: taskId,
        text: inputText,
        draggableId: `task${taskId}`,
      },
    ]);
    setInputText("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <>
      <Box m={"5px"}>
        <form onSubmit={handleSubmit}>
          <Input
            onChange={handleChange}
            type={"text"}
            placeholder={"add task"}
            value={inputText}
          />
        </form>
      </Box>
    </>
  );
};
