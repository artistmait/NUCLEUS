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
        <div className='flex ml-10 mt-5 text-3xl font-bold gap-10'>
         Welcome to NUCLEUS Portal
         </div>
        <div className='flex flex-col justify-center items-center ml-10 mt-5 text-3xl font-bold gap-10'>
           
<div className="relative grid justify-center items-center ml-30 grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl p-8">
  {/* Left side */}
  <h1 className="text-4xl md:text-4xl mt-3  font-bold leading-relaxed">
    Your Digital <br /> Campus <br /> Assistant
  </h1>

  {/* Right side */}
  <p className="text-lg mt-3 font-Kumbh font-medium">
    <span>NUCLEUS</span> — a cloud-native platform that connects
    departments, streamlines approvals, and keeps you updated in real time for a seamless campus
    experience.
  </p>
</div>
<div className="flex flex-row gap-10 m-10 justify-center items-stretch">
  {/* Card 1 */}
  <Card className="shadow-md w-1/4 flex flex-col justify-between p-6">
    <div className="flex flex-col items-center text-center flex-grow">
      <div className="bg-blue-200 p-4 rounded-full mb-4">
        <Verified className="w-8 h-8 text-black" />
      </div>
      <h3 className="text-xl font-bold mb-2">Digital Processing</h3>
      <p className="text-[15px] font-normal text-gray-600">
        Fast and secure online application processing with real-time status
        tracking
      </p>
    </div>
  </Card>

  {/* Card 2 */}
  <Card className="shadow-md w-1/4 flex flex-col justify-between p-6">
    <div className="flex flex-col items-center text-center flex-grow">
      <div className="bg-blue-200 p-4 rounded-full mb-4">
        <Verified className="w-8 h-8 text-black" />
      </div>
      <h3 className="text-xl font-bold mb-2">Verified Documents</h3>
      <p className="text-[15px] font-normal text-gray-600">
        Officially authenticated certificates and transcripts with digital
        verification
      </p>
    </div>
  </Card>

  {/* Card 3 */}
  <Card className="shadow-md w-1/4 flex flex-col justify-between p-6">
    <div className="flex flex-col items-center text-center flex-grow">
      <div className="bg-blue-200 p-4 rounded-full mb-4">
        <Verified className="w-8 h-8 text-black" />
      </div>
      <h3 className="text-xl font-bold mb-2">24/7 Access</h3>
      <p className="text-[15px] font-normal text-gray-600">
        Submit applications anytime and track progress with instant
        notifications
      </p>
    </div>
  </Card>
</div>


            <Card className='rounded-full w-fit items-center h-20 bg-gray-300'>
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