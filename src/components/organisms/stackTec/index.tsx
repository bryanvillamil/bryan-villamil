import Image from 'next/image'
import { OptionsTerminal, Title, Carousel } from "@components"
import { ContentStack, StackCarousel, Box } from "./styledComponents";

interface StackProps {
  data: {
    title: string;
    tools: {
      id: number;
      name?: string;
      logo?: string;
    }[]
  }
}

export const StackTec = (props: StackProps) => {
  console.log('props', props)
  const { data } = props;
  return (
    <ContentStack>
      <OptionsTerminal />
      <Title title={data.title} />
      <StackCarousel>
        <Carousel>
          {data.tools.map(item => {
            return (
              <Box key={item.id}>
               <Image src={`${item.logo}`} alt="logo" objectFit="contain" layout="fill" />
              </Box>
            )
          })}
        </Carousel>
      </StackCarousel>
    </ContentStack>
  );
};