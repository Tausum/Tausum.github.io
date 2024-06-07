import React from "react";

export default function DynamicRouter({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>
}