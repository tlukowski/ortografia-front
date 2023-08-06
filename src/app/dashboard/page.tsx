"use client";
import { NavDashboard } from "@/components/NavDashboard";
import CategoryList from "@/components/category/CategoryList";
import { LayoutDashboard } from "@/components/layout";
export default function Dashboard() {
  return (
    <LayoutDashboard>
      <NavDashboard />   
      <CategoryList />   
    </LayoutDashboard>
  );
}
