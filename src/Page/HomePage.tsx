import React,{useEffect,useRef} from "react";
import { ImageList, ImageListItem } from '@mui/material'
import { ImagesData } from '../data';
import gsap from 'gsap';
import { ScrollTrigger, Power4 } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);

interface Props { };

let HomePage: React.FC<Props> = ({ }) => {

    const  yearRefs : Array<any> = [];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        {
            yearRefs.forEach((el) => {
                gsap.fromTo(el, {
                    scale: 0.8,
                    opacity: 0,
                }, {
                    scale: 1,
                    opacity: 1,
                    duration: 1.25,
                    delay: .5,
                    ease: Power4.easeOut,
                    scrollTrigger: {
                        trigger: el
                    }
                })
            })
        }
    }, []);

    const addToYearRefs = (el:any) => {
        if (el && !yearRefs.includes(el)) {
            yearRefs.push(el);
        }
    }
    
    function srcset(image: String, size: any, rows: any, cols: any) {
        return {
            src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
            srcSet: `${image}?w=${size * cols}&h=${size * rows
                }&fit=crop&auto=format&dpr=2 2x`,
        };
    }

    return (
        <>
            <ImageList variant="quilted" cols={3} rowHeight={550}
                sx={{ width: "86vw", height: "100%", margin: "60px auto" }}>
                {
                    ImagesData.map((curr, indx) => (
                        <ImageListItem key={indx} cols={curr.col} rows={1}>
                            <img
                                {...srcset(curr.url, 121, 1, curr.col)}
                                alt={"ok"} style={{ objectFit: "cover", cursor: "zoom-in" }} className="img" ref={addToYearRefs}/>
                        </ImageListItem>
                    ))
                }
            </ImageList>

        </>
    )

}

export default HomePage;