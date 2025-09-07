import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import library from '../../../assets/library.jpg'
import Link from 'next/link'

const LibraryCard = () => {
  return (
      <Card className="shadow-md w-3/4 flex flex-row items-center gap-6 p-6 bg-gray-100">
      {/* Left side (Image) */}
      <div className="w-1/3 flex justify-center">
        <img
          src={library.src}
          alt="Exam Illustration"
          width={250}
          height={250}
        />
      </div>

      {/* Right side (Text + Button) */}
      <CardContent className="flex flex-col justify-center w-2/3 ">
        <h2 className="text-2xl font-bold mb-2">Library Section</h2>
        <p className="text-lg text-gray-600 mb-4">
          Access to academic resources, research databases, and digital learning materials
        </p>
        <Button asChild className='py-2 w-[300px] bg-[#191265] text-white hover:!bg-[#6BD73D] cursor-pointer h-10'>
          <Link href="/app/ExamSection/ExamSectionForm/page">Access Section</Link>
          </Button>
      </CardContent>
    </Card>
  )
}

export default LibraryCard