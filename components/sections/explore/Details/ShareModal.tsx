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
  isOpen: boolean;
  onClose: () => void;
};

export const ShareModal: FC<ShareModalProps> = ({ projectUrl, isOpen, onClose }) => {
  const { hasCopied, onCopy } = useClipboard(projectUrl);

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
              href={`https://twitter.com/intent/tweet?url=${projectUrl}`}
              direction="column"
              align="center"
            >
              {twitter}
              <ModalSocialLinksText>Twitter</ModalSocialLinksText>
            </Flex>
            <Flex
              as="a"
              href={`https://www.facebook.com/sharer/sharer.php?href=${projectUrl}`}
              direction="column"
              align="center"
            >
              {facebook}
              <ModalSocialLinksText>Facebook</ModalSocialLinksText>
            </Flex>
            <Flex
              as="a"
              href={`https://www.reddit.com/submit?url=${projectUrl}`}
              direction="column"
              align="center"
            >
              {reddit}
              <ModalSocialLinksText>Reddit</ModalSocialLinksText>
            </Flex>
            <Flex
              as="a"
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${projectUrl}`}
              direction="column"
              align="center"
            >
              {linkedIn}
              <ModalSocialLinksText>Linkedin</ModalSocialLinksText>
            </Flex>
            <Flex
              as="a"
              href={`https://telegram.me/share/url?url=${projectUrl}`}
              direction="column"
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
