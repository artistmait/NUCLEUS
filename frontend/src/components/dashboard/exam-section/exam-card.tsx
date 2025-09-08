import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import exam from '../../../assets/exam.jpg'
import Link from 'next/link'
import Image from 'next/image'

const ExamCard = () => {
  return (
      <Card className="shadow-md w-3/4 flex flex-row items-center gap-6 p-6 bg-gray-100">
      {/* Left side (Image) */}
      <div className="w-1/3 flex justify-center">
        <Image
          src={exam.src}
          alt="Exam Illustration"
          width={250}
          height={250}
        />
      </div>

      {/* Right side (Text + Button) */}
      <CardContent className="flex flex-col justify-center w-2/3 ">
        <h2 className="text-2xl font-bold mb-2">Exam Section</h2>
        <p className="text-lg text-gray-600 mb-4">
          Comprehensive examination management including applications, results, and <br/>academic certifications        </p>
        <Button asChild className='py-2 w-[300px] bg-[#191265] text-white hover:!bg-[#6BD73D] cursor-pointer h-10'>
          <Link href="/exam-application">Access Section</Link>
          </Button>
      </CardContent>
    </Card>
  )
}

export default ExamCard