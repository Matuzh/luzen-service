import React from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>
        <h1>Dashboard</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}