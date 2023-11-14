'use client';
import DraggableCircle from "@/components/DraggableCircle";
import { ReactElement, useEffect, useRef, useState } from "react";

interface List {
  id: number;
  title: string;
}

interface Props {}

export default function App({}: Props): ReactElement {
    // ref
    const dropZoneRef = useRef<HTMLDivElement>(null);

    // states
    const [dropZonePosition,setDropZonePosition] = useState<any>(null);
// effect
useEffect(() => {
    if (dropZoneRef.current) {
        setDropZonePosition(dropZoneRef?.current?.getBoundingClientRect());
        console.log(dropZoneRef.current.getBoundingClientRect())
    }
}
, [dropZoneRef.current])


  // list
  const [list, setList] = useState<List[]>([
    {
      id: 1,
      title: "الحرم",
    },
    {
      id: 2,
      title: "مكة",
    },
    {
      id: 3,
      title: "منى",
    },
    {
      id: 4,
      title: "الجمرات",
    },
    {
      id: 5,
      title: "عرفات",
    },
    {
      id: 6,
      title: "مزدلفة",
    },
  ]);
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden justify-around cursor-grab">
        
      <div className=" flex flex-row justify-center items-center gap-3 p-5">
        {list.map((item) => (
          <DraggableCircle 
          dropZonePosition={dropZonePosition}
          key={item.id} item={item} />
        ))}
      </div>
      <div className=" border-t border-b border-black min-h-[100px]"
      ref={dropZoneRef}
      ></div>
      <div className=""></div>
    </div>
  );
}

