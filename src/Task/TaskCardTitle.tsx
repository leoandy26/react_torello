import { Box, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

export const TaskCardTitle = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [inputTitle, setInputTitle] = useState("Add list");
  const handleClicked = () => {
    setIsClicked(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsClicked(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value);
  };

  const handleBlur = () => {
    setIsClicked(false);
  };

  return (
    <>
      <Box onClick={handleClicked}>
        {isClicked ? (
          <form onSubmit={handleSubmit}>
            <Input
              bgColor={"white"}
              autoFocus
              onBlur={handleBlur}
              type="text"
              onChange={handleChange}
              maxLength={5}
              value={inputTitle}
            />
          </form>
        ) : (
          <Text>{inputTitle}</Text>
        )}
      </Box>
    </>
  );
};
