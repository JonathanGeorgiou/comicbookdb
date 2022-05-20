import {
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { ElementType } from "react";
import useSwr from "swr";
import { CTA } from "../components/CTA";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Hero } from "../components/Hero";
import { Md5 } from "ts-md5";
import { Main } from "../components/Main";
import { getImage, urlBuilder } from "../utils/urlUtils";
import SearchBar from "../components/SearchBar";
import ComicCard from "../components/ComicCard";
import { CopyIcon } from "@chakra-ui/icons";

const index = (props) => {
  console.log(props.data.results[0].images);
  const imagePath: Array<string> = [];
  const resultsArray = props.data.results;
  let cardArray: Array<any> = [];
  for (let i = 0; i < resultsArray.length; i++) {
    cardArray.push(
      <ComicCard
        imageUrl={`${resultsArray[i].thumbnail.path}/portrait_incredible.jpg`}
        title={resultsArray[i].title}
        issueNumber={resultsArray[i].issueNumber}
        rating={4}
        key={i}
      ></ComicCard>
    );
  }
  return (
    <>
    <Hero/>
      {/* <Flex justifyContent="center" bgClip="text"> */}
        
        <SimpleGrid columns={4}>{cardArray}</SimpleGrid>
      {/* </Flex> */}
      <DarkModeSwitch />
    </>
  );
};

export async function getServerSideProps() {
  const req = await fetch(urlBuilder("comics"));
  const res = await req.json();
  //   console.log(info);

  if (!res) {
    return {
      notFound: true,
    };
  }

  return {
    props: res, // will be passed to the page component as props
  };
}

export default index;
