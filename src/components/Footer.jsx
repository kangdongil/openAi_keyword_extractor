import { Box, Flex, Image, Text } from "@chakra-ui/react";
import logo from "../assets/openai.svg";

const Footer = () => {
  return (
    <Box marginTop={50}>
      <Flex justifyContent="center" alignItems="center">
        <Image src={logo} width={8} marginRight={1} />
        <Text>OpenAI API를 활용함.</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
