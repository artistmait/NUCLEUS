"use client";

import React from "react";
import CardWrapper from "../forms/ExamCardWrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ExamApplicationSchema } from "../../../schema/examApplicationSchema";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import z from "zod";

const ExamApplicationForm = () => {
  const form = useForm({
    resolver: zodResolver(ExamApplicationSchema),
    defaultValues: {
      studentName: "",
      studentId: "",
      email: "",
      phone: "",
      semester: "",
      department: "",
      reason: "",
      documents: undefined,
    },
  });

  const onSubmit = (data: z.infer<typeof ExamApplicationSchema>) => {
    console.log("Form Submitted", data);
  };

  const onCancel = () => {
    form.reset();
  };

  return (
    <div className="max-w-5xl mx-auto mt-6">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6">Marksheet Request</h1>

      <CardWrapper
        title="Application Form"
        description="Please fill in all required information and upload necessary documents"
      >
        <div className="py-6 px-6" style={{ background: "#F7F5F5" }}>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid grid-cols-1 md:grid-cols-2 gap-10"
            >
              {/* Student Name */}
              <FormField
                control={form.control}
                name="studentName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Student Name <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter full name" 
                      className="h-12 bg-gray-300 px-3 rounded-md" />

                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Student ID */}
              <FormField
                control={form.control}
                name="studentId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Student ID <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter Student ID" 
                      className="h-12 bg-gray-300 px-3 rounded-md" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="Enter your email"
                        className="h-12 bg-gray-300 px-3 rounded-md" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Phone */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="tel"
                        placeholder="Enter phone number"
                        className="h-12 bg-gray-300 px-3 rounded-md" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Semester / Year */}
              <FormField
                control={form.control}
                name="semester"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Semester/Year <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="e.g., 5th Semester"
                      className="h-12 bg-gray-300 px-3 rounded-md" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Department */}
              <FormField
                control={form.control}
                name="department"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Department <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="e.g., Computer Science"
                      className="h-12 bg-gray-300 px-3 rounded-md" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Reason - full width */}
              <FormField
                control={form.control}
                name="reason"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel>Reason for Application <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Please provide a detailed reason for your application ..."
                        className="w-full h-32 resize-none bg-gray-300"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Upload Document - full width and wider */}
              <FormField
                control={form.control}
                name="documents"
                render={({ field }) => (
                  <FormItem className="col-span-1 md:col-span-2">
                    <FormLabel>Upload Required Documents <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <label className="flex items-center justify-center w-full h-12 px-4 border-2 border-dashed border-gray-300 rounded-md cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                        <span className="text-gray-700 font-medium">
                          {field.value ? field.value.name : "Choose File"}
                        </span>
                        <input
                          type="file"
                          className="hidden"
                          onChange={(e) =>
                            field.onChange(
                              e.target.files ? e.target.files[0] : undefined
                            )
                          }
                        />
                      </label>
                    </FormControl>
                    <FormMessage />
                  </FormItem>

                )}
              />

              {/* Buttons - Cancel + Submit */}
              <div className="col-span-2 flex justify-end gap-4 mt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onCancel}
                  className="px-6"
                >
                  Cancel
                </Button>
                <Button type="submit" className="px-6">
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </CardWrapper>
    </div>
  );
};

export default ExamApplicationForm;
