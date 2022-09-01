import { Typography, Stack, Tabs, Tab } from '@mui/material';
import React, { SyntheticEvent, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


interface Props {
};


let NavBar: React.FC<Props> = ({ }) => {

    let [value, setValue] = useState<Number>(0);

    let onChange = (event: SyntheticEvent<Element, Event>, val: Number): void => {
        setValue(val);
    }
    const Navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/") {
            setValue(0);
        } else if (location.pathname === "/commerical") {
            setValue(1);
        }
        else if (location.pathname === "/flim") {
            setValue(2);
        }
        else if (location.pathname === "/worker") {
            setValue(3);
        }
        else if (location.pathname === "/about") {
            setValue(4);
        }else{
            setValue(5);
        }
        console.log();
    }, [location]);

    return (
        <>
            <Stack sx={{ padding: "30px 7%", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Typography variant='h3' sx={{ fontSize: "25px", cursor: "pointer" }} onClick={() => {
                    Navigate("/");
                }}>Mero Photo</Typography>
                <Tabs
                    value={value}
                    onChange={onChange}
                >
                    <Tab label="HOME" sx={{ fontSize: "14px", color: "primary.light", cursor: "pointer", fontWeight: "400" }} onClick={() => {
                        Navigate("/");
                    }} />
                    <Tab label="COMMERCIAL" sx={{ fontSize: "14px", color: "primary.light", cursor: "pointer", fontWeight: "400" }} onClick={() => {
                        Navigate("/commerical");
                    }} />
                    <Tab label="FLIM" sx={{ fontSize: "14px", color: "primary.light", cursor: "pointer", fontWeight: "400" }} onClick={() => {
                        Navigate("/flim");
                    }} />
                    <Tab label="WORKER" sx={{ fontSize: "14px", color: "primary.light", cursor: "pointer", fontWeight: "400" }} onClick={() => {
                        Navigate("/worker");
                    }} />
                    <Tab label="ABOUT" sx={{ fontSize: "14px", color: "primary.light", cursor: "pointer", fontWeight: "400" }} onClick={() => {
                        Navigate("/about");
                    }} />
                    <Tab label="CONTACT" sx={{ fontSize: "14px", color: "primary.light", cursor: "pointer", fontWeight: "400" }} onClick={() => {
                        Navigate("/contact");
                    }}/>
                </Tabs>
            </Stack>
        </>
    )
}

export default NavBar;