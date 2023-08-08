"use client";
import CategoryList from "@/components/category/CategoryList";
import { LayoutDashboard } from "@/components/layout";
export default function Category() {
  return (
    <LayoutDashboard> 
      <CategoryList />   
    </LayoutDashboard>
  );
}
