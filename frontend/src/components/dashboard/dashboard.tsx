import React from 'react'
import { Navbar03 } from '../ui/shadcn-io/navbar-03'
import { Card, CardContent, CardHeader} from '../ui/card'
import { Clock, MoveDown, RefreshCcwDot, Verified } from 'lucide-react'
import ExamCard from './exam-section/exam-card'
import LibraryCard from './library-section/library-card'
import AdminCard from './admin-section/admin-card'

const Dashboard = () => {
  return (
    <div>
        <Navbar03/>
        <div className='flex flex-col justify-center items-center gap-10'>
            <Card className='m-10 p-10 bg-[#191265] text-white shadow-xs w-1/2'>
               <CardHeader className='text-2xl font-extrabold text-center'>Welcome to NUCLEUS Portal</CardHeader>
               <div className='flex flex-row gap-4 text-center'>
                <p className='font-semibold text-xl'>YOUR DIGITAL CAMPUS ASSISTANT</p>
               </div>
            </Card>
            <div className='flex flex-row gap-30 m-10 justify-center items-center'>
            <Card  className='shadow-md w-1/5 p-4'>
                <CardHeader className='flex items-center justify-center'>
                   <RefreshCcwDot className='mr-2 w-auto bg-blue-200 p-2 size-15 rounded-full'/>
                </CardHeader>
                <CardContent className='text-center text-2xl font-bold'>Digital Processing</CardContent>  
                <p className='text-center text-gray-600'>Fast and Secure Online Application Process in Real Time</p>
            </Card>
            <Card className='shadow-md w-1/5 p-4'>
                <CardHeader className='flex items-center justify-center'>
                   <Verified className='mr-2 w-auto bg-blue-200 p-2 size-15 rounded-full'/>
                </CardHeader>
                <CardContent className='text-center text-2xl font-bold'>Verified Documents</CardContent>  
                <p className='text-center text-gray-600'>Officially Authenticated certificates and transcripts with digital verification</p>
            </Card>
            <Card  className='shadow-md w-1/5 p-4'>
                <CardHeader className='flex items-center justify-center'>
                   <Clock className='mr-2 w-auto bg-blue-200 p-2 size-15 rounded-full'/>
                </CardHeader>
                <CardContent className='text-center text-2xl font-bold'>24/7 Access</CardContent>  
                <p className='text-center text-gray-600'>Submit Applications anytime and track progress with instant notifications</p>
            </Card>
            </div>
            <Card className='rounded-full w-auto h-20 bg-gray-300'>
            <CardContent className='text-center font-bold'>
                <div className='flex flex-row gap-2 justify-center items-center'>
                 <p className='text-2xl'>Explore Sections</p> <MoveDown className='size-10' />
                </div>
            </CardContent>
            </Card>
           <ExamCard/>
           <LibraryCard/>
           <AdminCard/>
        </div>
    </div>
  )
}

export default Dashboard