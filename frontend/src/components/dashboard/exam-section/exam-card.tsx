import { Button } from '@/components/ui/button'
import { Card, CardHeader } from '@/components/ui/card'
import React from 'react'

const ExamCard = () => {
  return (
   <Card className='shadow-md w-1/2 p-4'>
    <CardHeader className='flex items-start justify-start text-2xl font-bold'>
        Exam Section
    </CardHeader>
    <span className='text-lg font-muted'>Comprehensive exam management including exam related applications, results and academic certifications</span>
    <Button className='mt-4 bg-[#191265] text-white hover:bg-[#191265] cursor-pointer h-10'>Go to Exam Section</Button>
   </Card>
  )
}

export default ExamCard