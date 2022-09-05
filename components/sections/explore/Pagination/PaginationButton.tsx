import { FC } from "react";
import { Button, IconButton } from "@chakra-ui/react";

export type PaginationButtonProps = {
  selected?: boolean;
  onClick: React.EventHandler<React.MouseEvent<HTMLButtonElement, MouseEvent>>;
  children?: React.ReactNode;
  iconButton?: boolean;
  icon?: React.ReactElement;
  disabled?: boolean;
};

export const PaginationButton: FC<PaginationButtonProps> = ({
  selected = false,
  iconButton = false,
  children,
  onClick,
  icon,
  disabled = false,
}) => {
  return iconButton ? (
    <IconButton
      aria-label={"arrow button"}
      onClick={onClick}
      borderRadius="full"
      size="sm"
      variant="ghost"
      color="brand.black"
      icon={icon}
      m={0}
      disabled={disabled}
    />
  ) : (
    <Button
      onClick={onClick}
      borderRadius="full"
      size="sm"
      variant="ghost"
      color={selected ? "brand.blue" : "brand.grey-80"}
      bg={selected ? "brand.blue-10" : "transparent"}
      m={0}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};
