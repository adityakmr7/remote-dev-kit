import type React from "react";
import { AdminSidebar } from "@/components/admin-sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <div className="flex-1 px-8 overflow-auto">{children}</div>
    </div>
  );
}
