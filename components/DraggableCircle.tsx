'use client'
import React, { ReactElement, useState, useRef } from "react";
import Draggable from "react-draggable";
import { Calendar } from "@/components/ui/calendar"
import { DatePickerDemo } from "./ui/DatePicker";

// animation
import { motion, useAnimate } from "framer-motion"


interface Props {
  item: {
    id: number;
    title: string;
  };
  dropZonePosition: any;
}

function DraggableCircle({ item, dropZonePosition }: Props): ReactElement {
  const [isDateTimeVisible, setIsDateTimeVisible] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [dragged, setDragged] = useState(false);
  // ref
  const dragRef = useRef<HTMLDivElement>(null);
  const dateTimeRef = useRef<HTMLInputElement>(null);

 
  return (
    <Draggable
      onDrag={() => {
        if (
          dragRef.current &&
          dropZonePosition &&
          dragRef.current.getBoundingClientRect().left >=
            dropZonePosition.left &&
          dragRef.current.getBoundingClientRect().right <=
            dropZonePosition.right &&
          dragRef.current.getBoundingClientRect().top >=
            dropZonePosition.top &&
          dragRef.current.getBoundingClientRect().bottom <=
            dropZonePosition.bottom
        ) {
          setDragged(true);
          
        } else {
          setDragged(false);
        }

      }}
      
    >
      <div
        ref={dragRef}
        // className={`${dragged ? "relative ml-6" : ""}`}
        onClick={(e) => {
            e.stopPropagation();
          if (dragged) {
            setIsDateTimeVisible(!isDateTimeVisible);
          }
        //   open date time picker menu to select time and date from ref
           
    
        
        }}
      >
        {dragged && (
        //  an arrow pointing on right side

          <svg className="absolute right-[-25px] top-1/2 transform -translate-y-1/2" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M0 10H20M20 10L10 0M20 10L10 20" stroke="#000" strokeWidth="2" />
          </svg>

        )}
        <div
          id={item.id.toString()}
          className="z-30 relative flex flex-row justify-center items-center gap-2 rounded-full p-5 bg-[#fffffd] min-w-[80px] min-h-[80px] "
        >
          <p className="text-gray-800 text-xs font-semibold">{item.title}</p>
        </div>
       {/* show date time picker when isDateTimeVisible is true open date timepicker */}
            {
                dragged && (
                  <motion.div 

                  // 3 seconds delay to open date time picker scale 0 to 1
                  initial={{scale:0}}
                  // animate={{scale:1}}
                  // transition={{delay:1003}}


                  className="absolute" 
                  onClick={(e)=>{
                      e.stopPropagation();
                  }
                  }
                  >
                  <DatePickerDemo
                  date={date} setDate={setDate}
                  isDateTimeVisible={isDateTimeVisible} setIsDateTimeVisible={setIsDateTimeVisible} />
                  </motion.div>
                )
            }

      </div>
    </Draggable>
  );
}

export default DraggableCircle;
