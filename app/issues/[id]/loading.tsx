import { Skeleton } from "@/app/components";
import { Flex, Card, Box } from "@radix-ui/themes";
import React from "react";

const LoadingIssueDetailPage = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Flex gap="3" my="2">
        <Skeleton width="3rem" />
        <Skeleton width="6rem" />
      </Flex>
      <Card className="prose" mt="4">
        <Skeleton count={5} />
      </Card>
    </Box>
  );
};

export default LoadingIssueDetailPage;
