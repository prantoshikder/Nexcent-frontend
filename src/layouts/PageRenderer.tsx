/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import Footer from "@/components/partials/Footer";
import Header from "@/components/partials/Header";
import Loader from "@/components/shared/Loader";
import React, { useEffect, useState } from "react";

export default function PageRenderer({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {" "}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
    </>
  );
}
