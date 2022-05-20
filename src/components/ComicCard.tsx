import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Center, Image, Text } from "@chakra-ui/react";
import React from "react";

type ComicCardProps = {
  imageUrl: string;
  issueNumber: string;
  characterName?: string;
  title: string;
  rating?: number;
};

const ComicCard = (props: ComicCardProps) => {
  return (
    <Center>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
            {props.title}
            </Badge>
          </Box>

          <Image src={props.imageUrl} />

          <Text color="text">{`Issue No: ${props.issueNumber}`}</Text>
          {props.rating ? (
            <Box display="flex" mt="2" alignItems="center">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < props.rating ? "teal.500" : "gray.300"}
                  />
                ))}
            </Box>
          ) : (
            <Text>No rating</Text>
          )}
        </Box>
      </Box>
    </Center>
  );
};

export default ComicCard;
