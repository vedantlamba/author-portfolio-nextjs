"use client";

import {
  ChatCancelIcon,
  TickDouble03Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Toaster } from "react-hot-toast";

export function AppToaster() {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 4000,
        style: {
          background: "#000000",
          color: "#ffffff",
          border: "1px solid #262626",
          padding: "14px 16px",
        },
        success: {
          icon: <HugeiconsIcon icon={TickDouble03Icon} className="text-white" />,
        },
        error: {
          icon: <HugeiconsIcon icon={ChatCancelIcon} className="text-white" />,
        },
      }}
    />
  );
}
