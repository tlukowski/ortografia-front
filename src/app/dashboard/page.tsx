"use client";
import { NavDashboard } from "@/components/NavDashboard";
import { LayoutDashboard } from "@/components/layout";
import {Postxd} from "@/components/post/Post";

export default function Dashboard() {
  return (
    <>
      <LayoutDashboard>
        <NavDashboard />
        <Postxd />
      </LayoutDashboard>
    </>
  );
}
