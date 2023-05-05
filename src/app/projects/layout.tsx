import React from "react";
import TabsNav from "./TabsNav";

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TabsNav />

      <main>{children}</main>
    </>
  );
}
