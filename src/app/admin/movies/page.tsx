"use client";

import AdminHeader from "@/components/admin/layout/AdminHeader";
import { DataTable } from "./_components/data-table";
import { columns, Payment } from "./_components/columns";

const MoviesPage = () => {
  const data: Payment[] = [
    {
      id: "728ed52a",
      amount: 50,
      status: "success",
      email: "a@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52b",
      amount: 10,
      status: "failed",
      email: "b@example.com",
    },
    {
      id: "728ed52c",
      amount: 20,
      status: "processing",
      email: "c@example.com",
    },
  ]

  return (
    <div className="flex flex-col h-full w-full">
      <AdminHeader />

      <main className="flex-1 overflow-auto p-6 bg-gray-50">
        <div className="container mx-auto py-10">
          <DataTable columns={columns} data={data} />
        </div>
      </main>
    </div>
  );
};

export default MoviesPage;
