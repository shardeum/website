import {
  Text,
  Button,
  Flex,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useClipboard,
  Tooltip,
} from "@chakra-ui/react";
import { brandSocialIcons } from "@shm/Icons";
import { FC } from "react";
import ModalSocialLinksText from "./ModalSocialLinksText";

const { twitter, facebook, reddit, linkedIn, telegram } = brandSocialIcons;

// intents

// https://twitter.com/intent/tweet?url=
// https://www.linkedin.com/sharing/share-offsite/?url=
// https://www.reddit.com/submit?url=
// https://www.facebook.com/sharer/sharer.php?href=
// https://telegram.me/share/url?url=

export type ShareModalProps = {
  projectUrl: string;
  project: any;
  isOpen: boolean;
  onClose: () => void;
};

export const ShareModal: FC<ShareModalProps> = ({ projectUrl, isOpen, onClose, project }) => {
  const { hasCopied, onCopy } = useClipboard(projectUrl);
  const TEXT =
    " it cover only %0Athis Check out " +
    project.name +
    " on @shardeum 🔥 %0A%0ABuild highly scalable dapps on the worlds first EVM-based L1 which uses dynamic state sharding to increase TPS with every new node. %0A%0ALets %0A%0A" +
    projectUrl;
  return (
    <Modal isOpen={isOpen} isCentered onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        borderRadius="none"
        border="none"
        boxShadow="none"
        backgroundColor="brand.white"
      >
        <ModalHeader fontSize="2xl" color="brand.black">
          Share
        </ModalHeader>
        <ModalCloseButton color="brand.black" />
        <ModalBody>
          <HStack mt={4} align="center" justify="center" columnGap={2}>
            <Flex
              as="a"
              href={`https://twitter.com/intent/tweet?text=${projectUrl}`}
              direction="column"
              align="center"
              target={"_blank"}
            >
              {twitter}
              <ModalSocialLinksText>Twitter</ModalSocialLinksText>
            </Flex>
            <Flex
              as="a"
              // href={`https://www.facebook.com/sharer/sharer.php?href=${TEXT}`}
              href={`https://www.facebook.com/sharer/sharer.php?u=${projectUrl}`}
              direction="column"
              target={"_blank"}
              align="center"
            >
              {facebook}
              <ModalSocialLinksText>Facebook</ModalSocialLinksText>
            </Flex>
            <Flex
              as="a"
              href={`https://www.reddit.com/submit?url=${projectUrl}`}
              direction="column"
              target={"_blank"}
              align="center"
            >
              {reddit}
              <ModalSocialLinksText>Reddit</ModalSocialLinksText>
            </Flex>
            <Flex
              as="a"
              // href={`https://www.linkedin.com/sharing/share-offsite/?url=${TEXT}`}
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${projectUrl}&title=${project.name}&summary=${TEXT}`}
              direction="column"
              target={"_blank"}
              align="center"
            >
              {linkedIn}
              <ModalSocialLinksText>Linkedin</ModalSocialLinksText>
            </Flex>
            <Flex
              as="a"
              href={`https://telegram.me/share/url?url=${projectUrl}`}
              direction="column"
              target={"_blank"}
              align="center"
            >
              {telegram}
              <ModalSocialLinksText>Telegram</ModalSocialLinksText>
            </Flex>
          </HStack>
          <HStack
            mt={6}
            p={4}
            background={hasCopied ? "green.100" : "brand.grey-10"}
            justifyContent="space-between"
            transition="0.2s ease-in"
          >
            <Text lineHeight="2xl" color="brand.grey-70">
              {projectUrl?.slice(0, 35)}...
            </Text>

            <Text onClick={onCopy} cursor="pointer" color="brand.grey-90" fontWeight="semibold">
              <Tooltip backgroundColor="brand.grey-10" label={projectUrl}>
                {hasCopied ? "Copied" : "Copy"}
              </Tooltip>
            </Text>
          </HStack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ShareModal;
