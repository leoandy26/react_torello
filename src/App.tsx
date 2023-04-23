import { Box } from "@chakra-ui/react";
import { TaskCards } from "../src/Task/TaskCards";
import { Header } from "./Header";

const App = () => {
  return (
    <Box h={"100vh"}>
      <Header />
      <TaskCards />
    </Box>
  );
};

export default App;
