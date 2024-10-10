'use client'
import { useCallback, useEffect, useRef, useState } from "react";


export default function AutoTextSize({ text }: { text: any }) {
    const text_element = useRef(null);
    const [font_size, setSize] = useState(100);
    // const [isInitialRender, setIsInitialRender] = useState(true);

    var ro = new ResizeObserver(entries => {
        for (let entry of entries) {
          const cr = entry.contentRect;

          if (entry.target.parentNode !== null) {
            if ((entry.target.parentNode as HTMLElement).scrollHeight > (entry.target.parentNode as HTMLElement).clientHeight)
            // || e.parentNode.scrollWidth > e.parentNode.clientWidth )
            {
                console.log("heloooo");
                setSize((v) => v - 1);
            }
        }
      
        //   console.log('Element:', entry.target);
        //   console.log(`Element size: ${cr.width}px x ${cr.height}px`);
        //   console.log(`Element padding: ${cr.top}px ; ${cr.left}px`);

        //   console.log('Element:', entry.target.parentNode);
        //   console.log(`Element size: ${entry.target.parentNode.contentRect.width}px x ${entry.target.parentNode.contentRect.height}px`);
        // //   console.log(`Element padding: ${cr.top}px ; ${cr.left}px`);

        }
      });
      
      // Observe one or multiple elements
      
      
    

    // const resize = useCallback((element:HTMLElement) =>{
    //     if (element != null && element != undefined) {
    //         if (element.parentNode !== null) {
    //             if ((element.parentNode as HTMLElement).scrollHeight > (element.parentNode as HTMLElement).clientHeight)
    //             // || e.parentNode.scrollWidth > e.parentNode.clientWidth )
    //             {
    //                 console.log("heloooo");
    //                 setSize((v) => - 1);
    //             }
    //         }
    //     }
    // },[])
    // http://localhost:3000/test?cardLists=Aesi,%20Tyrant%20of%20Gyre%20Strait

    useEffect(() => {
            // setIsInitialRender(false);
            if (text_element.current != null && text_element.current != undefined) {
                console.log("callleddd");
                console.log(text_element.current);
                ro.observe(text_element.current!);
                // resize(text_element.current);
            }
    },[])

    return (
        <p ref={text_element} style={{ fontSize: font_size + '%' }}>{text}</p>
    );
}