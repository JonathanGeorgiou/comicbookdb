import { Flex, Heading } from '@chakra-ui/react'

export const Hero = ({ title }: { title: string }) => (
  <Flex
    justifyContent="center"
    height="20vh"
    bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
    bgClip="text"
  >
    <Heading fontSize="4vw">{title}</Heading>
  </Flex>
)

Hero.defaultProps = {
  title: 'Comic Book DB',
}
