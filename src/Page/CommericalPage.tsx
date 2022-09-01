import { Box, Stack, Typography, Button } from '@mui/material'
import React, { useRef, useEffect } from 'react'
import { CommercialData } from '../data'
import gsap from 'gsap';
import { ScrollTrigger, Power4 } from 'gsap/all';

interface Props { }

let CommericalPage: React.FC<Props> = ({ }) => {

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
        <>
            <Stack sx={{ width: "86%", margin: "80px auto", gap: "50px" }}>
                {
                    CommercialData.map((curr, indx) => (
                        <Box sx={{ background: `linear-gradient(to Top,rgb(39, 39, 41,1), rgb(39, 39, 41,0),rgb(39, 39, 41,1)) ,url(${curr?.url})`, width: "100%", height: "400px", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", backgroundSize: "cover" }} key={indx} ref={addToYearRefs}>
                            <Stack sx={{ margin: "10% 7%" }} >
                                <Typography variant='h3' sx={{ color: "white" }}>{curr.title}</Typography>
                                <Button sx={{
                                    padding: "10px 0px",
                                    width: "300px",
                                    borderRadius: "0px",
                                    backgroundColor: " rgb(39, 39, 41,0.3)",
                                    color: "white",
                                    border: "2px white solid", "&:hover": {
                                        backgroundColor: "white",
                                        color: "primary.main"
                                    }
                                }}>
                                    Check Project
                                </Button>
                            </Stack>
                        </Box>
                    ))
                }

            </Stack>
        </>
    )
}

export default CommericalPage;