import { Button, Textarea, useToast } from "@chakra-ui/react";
import { useState } from "react";

const TextInput = () => {
  const [text, setText] = useState("");
  const toast = useToast();
  const submitText = () => {
    if (text === "") {
      toast({
        title: "내용이 없습니다",
        description: "진행하려면 내용을 입력하세요",
        status: "error",
        duration: 5000,
        isClosable: false,
      });
    } else {
      console.log(text);
    }
  };
  return (
    <>
      <Textarea
        bg="blue.400"
        color="white"
        padding={4}
        marginTop={6}
        height={200}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        bg="blue.500"
        color="white"
        marginTop={4}
        width="100%"
        _hover={{ bg: "blue.700" }}
        onClick={submitText}
      >
        키워드 추출
      </Button>
    </>
  );
};

export default TextInput;
