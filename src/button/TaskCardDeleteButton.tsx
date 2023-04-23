import { Box, Button } from "@chakra-ui/react";
import { FC } from "react";
import { TaskCardType } from "../constants";

type Props = {
  taskCardList: TaskCardType[];
  setTaskCardList: (list: TaskCardType[]) => void;
  item: TaskCardType;
};

export const TaskCardDeleteButton: FC<Props> = ({
  setTaskCardList,
  taskCardList,
  item,
}) => {
  const taskCardDeleteButton = (aa: string) => {
    setTaskCardList(taskCardList.filter((item2) => item2.id !== aa));
  };

  return (
    <>
      <Box>
        <Button
          onClick={() => taskCardDeleteButton(item.id)}
          border={"1px solid gray"}
          color={"red"}
        >
          x
        </Button>
      </Box>
    </>
  );
};
