import React from "react";
import PageRenderer from "./PageRenderer";

export default function LayoutManager({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageRenderer>{children}</PageRenderer>;
}
