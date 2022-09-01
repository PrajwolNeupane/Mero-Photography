import { Stack, Typography } from '@mui/material'
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, Power4 } from 'gsap/all';
import { Box } from '@mui/system';

gsap.registerPlugin(ScrollTrigger);

interface Props { };

let AboutPage: React.FC<Props> = ({ }) => {

    let image = useRef<any>();
    const imageReveal = useRef<any>();
    let container = useRef<any>();
    const title = useRef<any>();
    const content = useRef<any>();
    const yearRefs: Array<any> = [];
    const aboutRef = useRef<any>();
    const boxRef = useRef<any>();

    const addToYearRefs = (el: any) => {
        if (el && !yearRefs.includes(el)) {
            yearRefs.push(el);
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        gsap.fromTo(imageReveal.current, {
            width: "100%"
        }, {
            width: "0%", duration: 1.5,
            delay: .2,
            ease: Power4.easeOut,
            scrollTrigger: {
                trigger: imageReveal.current
            }
        })
        gsap.fromTo(image.current, {
            scale: "0",
        }, {
            scale: "1", duration: 1,
            delay: .5,
            ease: Power4.easeOut,
            scrollTrigger: {
                trigger: image.current
            }
        })
        gsap.fromTo(container.current, {
            width: "0%",
            scale: "0.9",
            padding: "0px 0px"
        }, {
            scale: "1",
            width: "30%", padding: "60px 30px", duration: 1.5,
            delay: .2,
            ease: Power4.easeOut,
            scrollTrigger: {
                trigger: container.current
            }
        })
        gsap.fromTo(content.current, {
            opacity: 0
        }, {
            opacity: 1, duration: 0.8,
            delay: 1.2,
            ease: Power4.easeOut,
            scrollTrigger: {
                trigger: content.current
            }
        })
        gsap.fromTo(title.current, {
            translateY: "150%",
            opacity: 0, scale: "0"
        }, {
            opacity: 1,
            duration: 1,
            scale: "1",
            translateY: "0%",
            delay: .2,
            ease: Power4.easeOut,
            scrollTrigger: {
                trigger: title.current
            }
        })
        {
            yearRefs.forEach((el) => {
                gsap.fromTo(el, {
                    translateY: "150%", opacity: 0,
                }, {
                    opacity: 1, duration: .8,
                    translateY: "0%",
                    delay: .25,
                    ease: Power4.easeOut,
                    scrollTrigger: {
                        trigger: el
                    }
                })
            })
        }
        gsap.to(aboutRef.current, {
            keyframes: {
                "0": { opacity: 0 },
                "100": { opacity: 1 }
            },
            duration: .25,
            delay: 1
        })
        gsap.to(boxRef.current, {
            keyframes: {
                "0": { opacity: 1, y: 0 },
                "50": { opacity: 1, y: 25 },
                "100": { opacity: 1, y: 0 }
            },
            duration: 10,
            repeat: -1,
            delay: 1
        })
    }, []);

    return (
        <Stack sx={{ width: "86%", margin: "80px auto", gap: "60px", alignItems: "center", height: "100%" }}>
            <Stack sx={{ width: "80%", margin: "0px auto" }}>
                <Typography variant='h4' sx={{ fontSize: "13px", color: "primary.main", letterSpacing: "3px", position: "absolute", left: "5%", top: "50%", transform: "rotate(-90deg)", opacity: 0 }} ref={aboutRef}>ABOUT //</Typography>
                <Box sx={{ backgroundColor: "#e3e3e3", width: "20px", height: "60px", position: "absolute", left: "7.1%", top: "50%", zIndex: "-1", opacity: "0" }} ref={boxRef}></Box>
                <img src={"https://images.squarespace-cdn.com/content/v1/5e69292b2fd0eb1214e018d5/1597404648614-AAV55IEJ959PUEGASQBO/Airpixels-professional-photographer?format=1000w"} style={{width:"70%",height:"800px",objectFit:"cover"}} ref={image} />
                <div className='cover' ref={imageReveal}></div>
                <Box sx={{ width: "30%", height: "500px", backgroundColor: "#e3e3e3", position: "absolute", top: "260px", left: "55%", padding: "60px 30px" }} ref={container}>
                    <Stack gap="20px" ref={content}>
                        <Typography variant='h3' sx={{ fontSize: "30px", textAlign: "center", color: "primary.main" }} >ABOUT MERO PHOTO</Typography>
                        <Typography variant='h5' sx={{ color: "primary.main", fontSize: "14px" }} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</Typography>
                        <Typography variant='h5' sx={{ color: "primary.main", fontSize: "14px" }}>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</Typography></Stack>
                </Box>
            </Stack>
            <Stack sx={{ width: "70%", margin: "50px auto 0px auto" }}>
                <Typography variant='h3' sx={{ fontSize: "50px", textAlign: "center", color: "primary.main" }} ref={title}>LORM IMPUS</Typography>
                <div className='grid-box' style={{display:"grid",gridTemplateColumns:"auto auto auto auto",gridRowGap:"10px",marginTop:"50px",gridColumnGap:"10px"}}>
                    {
                        Array(26).fill("1").map((_, indx) => (
                            <li style={{ fontSize: "16px", fontWeight: 600, color: "#272729" }} key={indx} ref={addToYearRefs}>Lorem</li>
                        ))
                    }
                </div>
            </Stack>
        </Stack>
    )
}

export default AboutPage;