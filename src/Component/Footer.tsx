import { Box, Typography, Stack, Button } from '@mui/material'
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, Power4 } from 'gsap/all';
interface Props { };

let Footer: React.FC<Props> = ({ }) => {


    const yearRefs : Array<any> = [];

    const addToYearRefs = (el:any) => {
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
        <Box sx={{ width: "100%", height: "60vh", padding: "20vh 0px", display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "space-between" }}>
            <Typography variant='h5' sx={{ fontSize: "15px" }} ref={addToYearRefs}>Be the first to know about new arrivals, sales, and special events. Subscribe to the <span style={{ fontWeight: 500 }}>Mero Photo</span> newsletter.</Typography>
            <Stack sx={{ flexDirection: "row", gap: "20px" }} ref={addToYearRefs}>
                <input placeholder='Email Address' type="email" style={{ borderRadius: "0px", paddingLeft: "5px", width: "400px", border: "1px gray solid", fontSize: "16px" }} />
                <Button sx={{
                    padding: "20px 25px",
                    borderRadius: "0px",
                    backgroundColor: "white",
                    border: "2px black solid", "&:hover": {
                        backgroundColor: "primary.main",
                        color: "white"
                    }
                }}>Sign Up</Button>
            </Stack>
            <Typography sx={{ fontSize: "30px" }} variant="h3" ref={addToYearRefs}>Mero Photo</Typography>
            <Typography variant='h5' sx={{ fontSize: "15px", textDecoration: "underline", cursor: "pointer" }} ref={addToYearRefs}>Privacy policyContact</Typography>
            <Typography variant='h4' sx={{ fontSize: "15px" }} ref={addToYearRefs}>All RIGHTS RESERVED © Mero Photo AB 2021</Typography>
        </Box>
    )
}

export default Footer;