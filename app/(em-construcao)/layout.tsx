import React from "react"
import { ToastProvider } from "@/components/toast-provider";

export default function EmConstrucaoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <ToastProvider />
    </>
  );
}
