// src/components/forms/ExamCardWrapper.tsx
"use client";

import React, { ReactNode } from "react";

interface ExamCardWrapperProps {
  label?: string;
  title?: string;
  description?: string;
  children: ReactNode;
}

const ExamCardWrapper: React.FC<ExamCardWrapperProps> = ({
  label,
  title,
  description,
  children,
}) => {
  return (
    <div className="bg-gray-100 shadow-lg rounded-2xl p-10 w-full min-h-[800px] max-w-5xl mx-auto">
      {label && <p className="text-sm text-gray-500">{label}</p>}
      {title && <h2 className="text-2xl font-semibold mt-1">{title}</h2>}
      {description && <h2 className="text-1xl mt-1">{description}</h2> }
      <div className="mt-6">{children}</div>
    </div>
  );
};

export default ExamCardWrapper;
