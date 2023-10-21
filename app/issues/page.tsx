import React from "react";
import { Button, TextField } from "@radix-ui/themes";
import Link from "next/link";

const Issues = () => {
  return (
    <div>
      <Button>
        <Link href={"/issues/new"}>New Issue</Link>
      </Button>
    </div>
  );
};

export default Issues;
