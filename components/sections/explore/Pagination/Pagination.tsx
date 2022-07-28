import { FC } from "react";

import { BoxProps, HStack, Text } from "@chakra-ui/react";
import { PaginationButton } from "./PaginationButton";
import { IconLeftArrow, IconRightArrow } from "@shm/Icons";
import usePagination from "hooks/usePagination";

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

  const thing = usePagination({ totalPageCount: totalPages, currentPage, siblingCount: 1 });

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

      {thing.map((pageNumber) => {
        const isSelected = pageNumber === currentPage;

        if (pageNumber === "...") return <Text color="brand.black">&#8230;</Text>;

        return (
          <PaginationButton
            key={pageNumber}
            onClick={() => onPageChange(pageNumber as number)}
            selected={isSelected}
          >
            {pageNumber}
          </PaginationButton>
        );
      })}

      {/* right button */}
      <PaginationButton iconButton onClick={onClickRight} icon={<IconRightArrow />} />
    </HStack>
  );
};
