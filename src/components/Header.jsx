import { Heading, Image, Text } from "@chakra-ui/react";
import logo from "../assets/light-bulb.svg";

const Header = () => {
  return (
    <>
      <Image src={logo} alt="logo" width={100} marginBottom="1rem" />
      <Heading color="white" marginBottom="1rem">
        OpenAI를 활용한 키워드 추출기
      </Heading>
      <Text fontSize={25} textAlign="center">
        하단에 글을 넣으면 키워드를 추출해드립니다.
      </Text>
    </>
  );
};

export default Header;
