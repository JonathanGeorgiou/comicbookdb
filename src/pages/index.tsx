import { Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
import useSwr from "swr";
import { CTA } from "../components/CTA";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Hero } from "../components/Hero";
import { Md5 } from "ts-md5";
import { Main } from "../components/Main";
import { urlBuilder } from "../utils/urlUtils";

const index = (props) => {
  console.log(props.data.results);
  return (
    <>
      <Hero />
      <Flex
        justifyContent="center"
        alignItems="center"
        // height="1vh"
        bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
        bgClip="text"
      >
        <Text color="text">{JSON.stringify(props.data.results[0])}</Text>
      </Flex>
      <DarkModeSwitch />
      <CTA />
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
