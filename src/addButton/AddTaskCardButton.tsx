import { Box, Button } from "@chakra-ui/react";
import { FC } from "react";
import { TaskCardType } from "../constants";

type Props = {
  setTaskCardList: (list: TaskCardType[]) => void;
  taskCardList: TaskCardType[];
};

export const AddTaskCardButton: FC<Props> = ({
  taskCardList,
  setTaskCardList,
}) => {
  return (
    <>
      <Box>
        <Button>+</Button>
      </Box>
    </>
  );
};
