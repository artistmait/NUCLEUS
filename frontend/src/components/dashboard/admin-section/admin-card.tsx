import { Button } from '@/components/ui/button'
import { Card, CardHeader } from '@/components/ui/card'
import React from 'react'

const AdminCard = () => {
  return (
   <Card className='shadow-md w-1/2 p-4'>
    <CardHeader className='flex items-start justify-start text-2xl font-bold'>
        Admin Office Section
    </CardHeader>
    <span className='text-lg font-muted'>Student administrative services, document processing and institutional procedures</span>
    <Button className='mt-4 bg-[#191265] text-white hover:bg-[#191265] cursor-pointer h-10'>Go to Admin Office Section</Button>
   </Card>
  )
}

export default AdminCard