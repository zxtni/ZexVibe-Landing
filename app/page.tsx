"use client";

import React from "react";
import RuixenMoonChat from "@/components/ui/ruixen-moon-chat"; // adjust path 

export default function DemoPage() {
  return (
    <main className="min-h-screen w-full bg-black text-white">
      {/* Chat Component */}
      <section className="flex justify-center items-start w-full">
        <RuixenMoonChat />
      </section>
    </main>
  );
}