import { FC } from "react";

import { BoxProps, HStack } from "@chakra-ui/react";
import { PaginationButton } from "./PaginationButton";
import { IconLeftArrow, IconRightArrow } from "@shm/Icons";

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
} & BoxProps;

export const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  ...flexProps // can add flex container styles here as you wish
}) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const onClickLeft = () => {
    if (!isFirstPage) {
      onPageChange(currentPage - 1);
    }
  };

  const onClickRight = () => {
    if (!isLastPage) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <HStack justifyContent="center" alignItems="center" gap={1} {...flexProps}>
      {/* left button */}
      <PaginationButton iconButton onClick={onClickLeft} icon={<IconLeftArrow />} />

      {Array(totalPages)
        .fill(0)
        .map((_, index) => {
          const page = index + 1;
          const isSelected = page === currentPage;

          return (
            <PaginationButton key={page} onClick={() => onPageChange(page)} selected={isSelected}>
              {page}
            </PaginationButton>
          );
        })}

      {/* right button */}
      <PaginationButton iconButton onClick={onClickRight} icon={<IconRightArrow />} />
    </HStack>
  );
};
