'use client';
import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import BackButton from './back-button';
import AuthHeader from './auth-header';


interface CardWrapperProps {
  label: string;
  title: string;
  backbuttonHref: string;
  backbuttonLabel: string;
  children: React.ReactNode;
}

const CardWrapper = ({label , title, backbuttonHref , backbuttonLabel,children} : CardWrapperProps) => {
  return (
    <Card className='w-500 max-w-md mx-auto my-10'>
        <CardHeader className='xl:w-full md:w-1/2 shadow-xs bg-[#191970] text-white rounded-b-xl'>
        <AuthHeader label={label} title={title}/>
        </CardHeader>
        <CardContent>
        {children}
        </CardContent>
        <CardFooter>
        <BackButton label={backbuttonLabel} href={backbuttonHref}></BackButton>
        </CardFooter>
    </Card>
  )
}

export default CardWrapper