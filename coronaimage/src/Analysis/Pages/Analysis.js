import React from "react";
import ImageUploader from "../Components/ImageUploader";
import { useColorMode } from "@chakra-ui/core";
const Analysis = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <ImageUploader
      bg={colorMode === "light" ? "gray.800" : "white"}
      textColor={colorMode === "light" ? "white" : "black"}
    />
  );
};

export default Analysis;
