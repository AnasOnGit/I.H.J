"use client"

import * as React from "react"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function DatePickerDemo({isDateTimeVisible,setIsDateTimeVisible,date,setDate}:{
    isDateTimeVisible: boolean;
    setIsDateTimeVisible: React.Dispatch<React.SetStateAction<boolean>>;
    date: Date | undefined;
    setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}) {


  return (
    <Popover
    
    open={isDateTimeVisible} onOpenChange={e=>{
        setIsDateTimeVisible(e);
    }} >
      <PopoverTrigger >
    
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          

        //   initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
