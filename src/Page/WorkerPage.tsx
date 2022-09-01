import { Box, Stack, Typography } from '@mui/material'
import React, { useRef, useState, useEffect } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { WorkerData } from "../data";
import gsap from 'gsap';
import { ScrollTrigger, Power4 } from 'gsap/all';

interface Props { };

let WorkerPage: React.FC<Props> = ({ }) => {

    let [indx, setIndx] = useState<number>(0);
    const imageRef = useRef<any>();
    const contentRef = useRef<any>();
    const ballRef = useRef<any>();
    const boxRef = useRef<any>();

    const ImageFadePrev = () => {
        gsap.fromTo(imageRef.current, {
            scale: 0,
            translateX: "50%"
        }, {
            scale: 1,
            translateX: "0%",
            duration: 1,
            ease: Power4.easeOut,
        })
    }
    const ImageFadeNext = () => {
        gsap.fromTo(imageRef.current, {
            scale: 0,
            translateX: "-50%"
        }, {
            scale: 1,
            translateX: "0%",
            duration: 1,
            ease: Power4.easeOut,
        })
    }
    const TextFadePrev = () => {
        gsap.fromTo(contentRef.current, {
            scale: 0,
            translateX: "50%"
        }, {
            scale: 1,
            translateX: "0%",
            duration: 1,
            ease: Power4.easeOut,
        })
    }
    const TextFadeNext = () => {
        gsap.fromTo(contentRef.current, {
            scale: 0,
            translateX: "-50%"
        }, {
            scale: 1,
            translateX: "0%",
            duration: 1,
            ease: Power4.easeOut,
        })
    }

    const Next = () => {
        ImageFadePrev();
        TextFadePrev();
        if (indx === WorkerData.length - 1) {
            setIndx(0);
        } else {
            setIndx(indx + 1);
        }


    }
    const Prev = () => {
        ImageFadeNext();
        TextFadeNext();

        if (indx === 0) {
            setIndx(WorkerData.length - 1);
        } else {
            setIndx(indx - 1);
        }

    }

    useEffect(() => {
        gsap.to(ballRef.current, {
            keyframes: {
                "0%": { backgroundColor: "#f25252" },
                "17.98%": { backgroundColor: "#ddf252" },
                "49.98%": { backgroundColor: "#52f2e7" },
                "67.96%": { backgroundColor: "#b552f2" },
                "100%": { backgroundColor: "#f25252" },
            },
            duration: 30,
            repeat: -1,
        })
        gsap.to(boxRef.current, {
            keyframes: {
                "0%": { backgroundColor: "#ddf252" },
                "17.98%": { backgroundColor: "#52f2e7" },
                "49.98%": {  backgroundColor: "#b552f2" },
                "67.96%": {  backgroundColor: "#f25252"},
                "100%": { backgroundColor: "#ddf252"},
            },
            duration: 30,
            repeat: -1,
        })
    }, []);

    return (
        <Stack sx={{ width: "86%", margin: "40px auto", gap: "60px", flexDirection: "column", justifyContent: "space-between" }}>
            <Typography sx={{ textAlign: "center", fontSize: "30px" }} variant="h4">OUR PROUD WORKERS</Typography>
            <Stack sx={{ flexDirection: "row", alignItems: "center", width: "100%", justifyContent: "space-between" }}>
                <ArrowBackIosIcon onClick={() => {
                    Prev();
                }} />
                <Stack sx={{ flexDirection: "row", padding: "15px", backgroundColor: "#f5f5f5", width: "50%", gap: "20px" }}>
                    <Box sx={{ width: "100px", height: "100px", position: "absolute", zIndex: "-1", scale: 1,top: "28%", left: "25%" }} ref={boxRef}></Box>
                    <Box sx={{ width: "300px", height: "300px", position: "absolute", zIndex: "-1", scale: 1,top: "50%", right: "20%" }} ref={ballRef}></Box>
                    <img src={WorkerData[indx].img} style={{ width: "300px", backgroundColor: "white", height: "300px", objectFit: "cover" }} ref={imageRef} />
                    <Stack sx={{ justifyContent: "start", gap: "5px" }} ref={contentRef}>
                        <Typography sx={{ fontSize: "20px" }} variant="h4">{WorkerData[indx].name}</Typography>
                        <Typography sx={{ fontSize: "15px" }} variant="h5">
                            {WorkerData[indx].detail}
                        </Typography>
                        <Typography sx={{ fontSize: "17px" }} variant="h4">{WorkerData[indx].title}</Typography>
                    </Stack>
                </Stack>
                <ArrowForwardIosIcon onClick={() => {
                    {
                        Next();
                    }
                }} />
            </Stack>
        </Stack>
    )
}
export default WorkerPage;