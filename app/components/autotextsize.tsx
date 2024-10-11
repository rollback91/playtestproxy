'use client'
import { useEffect, useRef, useState } from "react";


export default function AutoTextSize({ text, depth=0 }: { text: any, depth?:number}) {
    const text_element = useRef(null);
    const [font_size, setSize] = useState(100);

    var ro = new ResizeObserver(entries => {
        for (let entry of entries) {
            
          if (entry.target.parentNode !== null) {
            let parent = entry.target.parentNode;
            for(let i = 0; i<depth; i++){
                parent = parent.parentNode!;
            }
            if ((parent as HTMLElement).scrollHeight > (parent as HTMLElement).clientHeight)
            // || e.parentNode.scrollWidth > e.parentNode.clientWidth )
            {
                setSize((v) => v - 1);
            }
        }
        }
      });

    useEffect(() => {
            if (text_element.current != null && text_element.current != undefined) {
                ro.observe(text_element.current!);
            }
    },[])

    return (
        <p ref={text_element} style={{ fontSize: font_size + '%' }}>{text}</p>
    );
}