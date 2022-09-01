import { Stack, Typography, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, Power4 } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

interface Props { }

let ContactPage: React.FC<Props> = ({ }) => {

    const leftContainer = useRef<any>();
    const rightContainer = useRef<any>();

    useEffect(() => {
        gsap.fromTo(
            leftContainer.current, {
            translateX: "-100%",
            opacity: 0,
        }, {
            translateX: "0px",
            opacity: 1,
            duration: .8,
            delay: .2,
            ease: Power4.easeOut,
            scrollTrigger: {
                trigger: leftContainer.current
            }
        }
        );
        gsap.fromTo(
            rightContainer.current, {
            translateX: "100%",
            opacity: 0,
        }, {
            translateX: "0px",
            opacity: 1,
            duration: .8,
            delay: .2,
            ease: Power4.easeOut,
            scrollTrigger: {
                trigger: rightContainer.current
            }
        }
        );
    }, []);



    return (
        <Stack sx={{ width: "86%", margin: "80px auto", gap: "60px", flexDirection: "row", justifyContent: "space-between" }}>
            <Stack sx={{ gap: "10px" }} ref={leftContainer}>
                <Typography variant='h3' sx={{ fontSize: "35px", marginBottom: "50px" }}>Contact us.</Typography>
                <Typography variant='h5' sx={{ fontSize: "15px" }}>Lorem Impus</Typography>
                <Typography variant='h5' sx={{ fontSize: "15px" }}>Lorem Impus Lorem</Typography>
                <Stack sx={{ flexDirection: "row", gap: "10%" }}>
                    <a href='https://github.com/PrajwolNeupane' target={"_blank"}><GitHubIcon sx={{ fontSize: "26px", color: "primary.main" }} /></a>
                    <a href="https://www.linkedin.com/in/prajwol-neupane-b64418208/" target={"_blank"}><LinkedInIcon sx={{ fontSize: "26px", color: "primary.main" }} /></a>
                    <a href="https://www.facebook.com/prajwolxhettry/" target={"_blank"}><FacebookIcon sx={{ fontSize: "26px", color: "primary.main" }} /></a>
                </Stack>
            </Stack>
            <Stack sx={{ gap: "20px", width: "50%" }} ref={rightContainer}>
                <Stack sx={{ flexDirection: "row", alignItems: "end", justifyContent: "space-between" }}>
                    <Stack>
                        <Typography variant='h5' sx={{ fontSize: "15px", color: "primary.main" }}>Name *</Typography>
                        <input type={"text"} style={{ borderRadius: "0px", padding: "10px 5px", width: "100%", backgroundColor: "#f5f5f5", border: "1px gray solid", fontSize: "16px" }} />
                        <Typography variant='h5' sx={{ fontSize: "13px", color: "primary.main" }}>First Name</Typography>
                    </Stack>
                    <Stack>
                        <input type={"text"} style={{ borderRadius: "0px", padding: "10px 5px", width: "100%", backgroundColor: "#f5f5f5", border: "1px gray solid", fontSize: "16px" }} />
                        <Typography variant='h5' sx={{ fontSize: "13px", color: "primary.main" }}>Last Name</Typography>
                    </Stack>
                </Stack>
                <Stack>
                    <Typography variant='h5' sx={{ fontSize: "15px", color: "primary.main" }}>Email *</Typography>
                    <input type={"text"} style={{ borderRadius: "0px", padding: "10px 5px", width: "100%", border: "1px gray solid", backgroundColor: "#f5f5f5", fontSize: "16px" }} />
                </Stack>
                <Stack>
                    <Typography variant='h5' sx={{ fontSize: "15px", color: "primary.main" }}>Message *</Typography>
                    <textarea  style={{ resize: "none", borderRadius: "0px", backgroundColor: "#f5f5f5", padding: "10px 5px", width: "100%", height: "150px", border: "1px gray solid", fontSize: "16px" }} />
                </Stack>
                <Button sx={{
                    padding: "20px 25px",
                    width: "20%",
                    borderRadius: "0px",
                    backgroundColor: "white",
                    border: "2px black solid", "&:hover": {
                        backgroundColor: "primary.main",
                        color: "white"
                    }
                }}>Send</Button>
            </Stack>

        </Stack>
    )
}

export default ContactPage