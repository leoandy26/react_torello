import { Box, Button } from "@chakra-ui/react";
import { FC } from "react";
import { TaskCardType } from "../constants";
import { v4 as uuid } from "uuid";
type Props = {
  setTaskCardList: (list: TaskCardType[]) => void;
  taskCardList: TaskCardType[];
};

export const AddTaskCardButton: FC<Props> = ({
  taskCardList,
  setTaskCardList,
}) => {
  const addTaskCard = () => {
    const taskCardId = uuid();

    setTaskCardList([
      ...taskCardList,
      {
        id: taskCardId,
        draggableId: `item${taskCardId}`,
      },
    ]);
  };

  return (
    <>
      <Box>
        <Button onClick={addTaskCard}>+</Button>
      </Box>
    </>
  );
};
