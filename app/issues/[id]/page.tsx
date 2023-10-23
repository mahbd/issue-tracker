import IssueStatusBadge from "@/app/component/IssueStatusBadge";
import prisma from "@/prisma/client";
import { Card, Flex } from "@radix-ui/themes";
import { Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import ReactMarkDown from "react-markdown";

interface Props {
  params: { id: string };
}

const IssueDetailsPage = async ({ params: { id } }: Props) => {
  if (isNaN(parseInt(id))) notFound();

  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!issue) notFound();

  return (
    <div>
      <Heading>{issue.title}</Heading>
      <Flex gap="3" my="2">
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose" mt="4">
        <ReactMarkDown>{issue.description}</ReactMarkDown>
      </Card>
    </div>
  );
};

export default IssueDetailsPage;
