import React from "react";

export default function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`container mx-auto px-1 sm:px-2 ${className}`}>
      {children}
    </div>
  );
}
