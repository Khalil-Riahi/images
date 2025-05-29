"use client";

// import ComponentCard from "@/app/components/common/ComponentCard";
import ComponentCard from "./../../../../common/ComponentCard";

// import PageBreadcrumb from "@/app/components/common/PageBreadCrumb";
import PageBreadcrumb from "./../../../../common/PageBreadCrumb";

// import BasicTableTwo from "@/app/components/tables/BasicTableTwo";
import BasicTableTwo from "./../../../../components/tables/BasicTableTwo";

import React from "react";

// Removed Metadata export since it's a TypeScript-only type declaration

export default function BasicTables() {
  return (
    <div>
      <PageBreadcrumb />
      <div className="space-y-6">
        <ComponentCard title="Subscriptions History">
          <BasicTableTwo />
        </ComponentCard>
      </div>
    </div>
  );
}
