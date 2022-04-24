import {
  AspectRatio,
  Box,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { useNewsList } from "@shm/hooks";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { IconLeftArrow, IconRightArrow } from "./Icons";
import SectionHeading from "./SectionHeading";

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <ButtonGroup variant="secondary">
      <IconButton
        bg="brand.grey-20"
        color="brand.grey-80"
        aria-label=""
        icon={<IconLeftArrow />}
        onClick={() => swiper.slidePrev()}
      />
      <IconButton
        bg="brand.grey-20"
        color="brand.grey-80"
        aria-label=""
        icon={<IconRightArrow />}
        onClick={() => swiper.slideNext()}
      />
    </ButtonGroup>
  );
};

const NewsItem = ({
  title,
  imageURL,
  siteName,
  newsURL,
}: {
  title: string;
  imageURL: string;
  siteName: string;
  newsURL: string;
}) => (
  <Link passHref href={newsURL}>
    <VStack maxW="700px" as="a" rel="noopener noreferrer" target="__blank">
      <Flex w="full" position="relative">
        <AspectRatio ratio={564 / 300} w="full">
          <Image src={imageURL} alt={title} layout="fill" />
        </AspectRatio>{" "}
        <Box position="absolute" bg="brand.white" px="3" py="2" bottom="0">
          <Text color="brand.black" fontSize={{ base: "xs", md: "sm" }} fontWeight="medium">
            {siteName}
          </Text>
        </Box>
      </Flex>
      <Flex mt="6">
        <Text fontSize={{ base: "xl", md: "2xl" }} color="brand.black" fontWeight="medium">
          {title}
        </Text>
      </Flex>
    </VStack>
  </Link>
);

const NewsAppearance = ({ sectionTitle }: { sectionTitle: string }) => {
  const slidesPerView = useBreakpointValue({ base: 1, md: 2 });
  const { data } = useNewsList();

  return (
    <Box>
      <Swiper slidesPerView={slidesPerView} spaceBetween={20} autoplay>
        <Box slot="container-start" pt="2">
          <VStack spacing={8} w="full" alignItems="start">
            <HStack
              alignItems="center"
              spacing="12"
              justifyContent="space-between"
              w="full"
              mb="12"
            >
              <SectionHeading color="brand.black">{sectionTitle}</SectionHeading>
              <SliderButtons />
            </HStack>
          </VStack>
        </Box>
        {data.map((item) => (
          <SwiperSlide key={item.title}>
            <NewsItem
              title={item.title}
              imageURL={item.imageURL}
              siteName={item.siteName}
              newsURL={item.newsURL}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default NewsAppearance;
