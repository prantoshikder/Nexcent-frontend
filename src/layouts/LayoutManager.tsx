"use client";

import { StyleProvider } from "@ant-design/cssinjs";
import React from "react";
import PageRenderer from "./PageRenderer";

export default function LayoutManager({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyleProvider layer>
      <PageRenderer>{children}</PageRenderer>
    </StyleProvider>
  );
}
