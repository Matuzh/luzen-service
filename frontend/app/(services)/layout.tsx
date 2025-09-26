import React from "react";

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>
        <h1>Services</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}