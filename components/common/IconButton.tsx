import { Button, LightMode } from "@chakra-ui/react";
import { IconRightArrow } from "@shm/Icons";

const IconButtonRight = ({ onClick }: { onClick: () => void }) => {
  return (
    <LightMode>
      <Button p="5" variant="secondary" h="full" width="full" onClick={onClick}>
        <IconRightArrow />
      </Button>
    </LightMode>
  );
};

export default IconButtonRight;
