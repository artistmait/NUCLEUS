"use client";

import React from "react";
import ExamApplicationForm from "@/components/forms/ExamApplicationForm";

const ExamApplicationPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <div className="w-full max-w-5xl">
        <ExamApplicationForm />
      </div>
    </div>
  );
};

export default ExamApplicationPage;