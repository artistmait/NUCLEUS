'use client';
import React from 'react'
import CardWrapper from './card-wrapper';
import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginFormSchema } from '../../../schema';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import z from 'zod';

const LoginForm = () => {
const form = useForm({
    resolver: zodResolver(LoginFormSchema),
    defaultValues:{
        moodleid: '',
        password: '',
    }
})

const onSubmit =(data : z.infer<typeof LoginFormSchema>) =>{
    console.log("Form Submitted", data);

}

  return (
    <>
    <CardWrapper
    label="Create an Account"
    title="Login"
    backbuttonHref="/auth/signup"
    backbuttonLabel="Already have an Account? Login here"
    >
        <div>
        {/* children */}
        {/* Form is from our shadcn ui and we are passing the form schema above with default values as a prop to it -> makes validation easier */}
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        <div className='space-y-8'>
        <FormField 
        control={form.control}
        name="moodleid"
        render={({field}) =>(
            <FormItem>
            <FormLabel>Moodle Id</FormLabel>
            <FormControl>
                <Input {...field} type="id" placeholder='Please enter your Moodle ID' ></Input>
            </FormControl>
            <FormMessage />
            </FormItem>
        )} />
        <FormField 
        control={form.control}
        name="password"
        render={({field}) =>(
            <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
                <Input {...field} type="password" placeholder='Please enter your Password' ></Input>
            </FormControl>
            <FormMessage />
            </FormItem>
        )} />
        </div>
        <Button type='submit' className='w-full'>
        Login
        </Button>
        </form>
        </Form>
        </div>
    </CardWrapper>
    </>
  )
}

export default LoginForm