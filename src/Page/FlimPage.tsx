import React, { useEffect, useRef } from 'react';
import { Stack, Typography } from '@mui/material'
import gsap from 'gsap';
import { ScrollTrigger, Power4 } from 'gsap/all';

interface Props { }

let FlimPage: React.FC<Props> = ({ }) => {

    const yearRefs: Array<any> = [];


    const addToYearRefs = (el: any) => {
        if (el && !yearRefs.includes(el)) {
            yearRefs.push(el);
        }
    }

    useEffect(() => {
        {
            yearRefs.forEach((el) => {
                gsap.fromTo(el, {
                    translateY: "50px",
                    opacity: 0,
                }, {
                    translateY: "0px",
                    opacity: 1,
                    duration: .8,
                    delay: .2,
                    ease: Power4.easeOut,
                    scrollTrigger: {
                        trigger: el
                    }
                })
            })
        }
    }, []);

    return (
        <Stack sx={{ width: "86%", margin: "80px auto", gap: "60px", alignItems: "center" }}>
            <iframe width="820" height="461" src="https://www.youtube.com/embed/9ZJOmf1af0g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
            <Typography variant='h3' sx={{ color: "primary.main", fontSize: "45px" }} ref={addToYearRefs}>OUR BEAUTIFUL WORLD</Typography>
            <Typography variant='h5' sx={{ color: "primary.main", fontSize: "15px", width: "60%", textAlign: "center" }} ref={addToYearRefs}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <span style={{ fontWeight: 500 }}>industry's standard dummy text</span> ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Typography>
            <Typography variant='h5' sx={{ color: "primary.main", fontSize: "16px", width: "60%", textAlign: "center" }} ref={addToYearRefs}> Our photographs and videos are available for licensing to all commercial industries.</Typography>
        </Stack>
    )
}

export default FlimPage;