import { FormControlLabel, Icon } from "@mui/material";
import { useState } from "react";
import { MaterialUISwitch } from "./MaterialUISwitch";


import { Component, useContext } from "react";
import { ThemeContext } from './ThemeProvider';
import { Link } from "react-router-dom";


export default function Navigation() {
    const { theme, toggle, dark } = useContext(ThemeContext);
        return (
                <nav style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                    <ul>
                        <Link to="/">
                            <li>
                            <i class="fa-solid fa-house" style={{color: theme.color}}></i>
                                <a className="active" href="" style={{color: theme.color}}> Home</a>
                            </li>
                        </Link>
                        <Link to="/news">
                        <li>
                            <i class="fa-solid fa-bell" style={{color: theme.color}}></i>
                            <a className="" style={{color: theme.color}}> News</a>
                        </li>
                        </Link>
                        <Link to="/about">
                        <li>
                        <i class="fa-solid fa-address-card"  style={{color: theme.color}}></i>
                            <a className="" href="#About" style={{color: theme.color}}> About</a>
                        </li>
                        </Link>
                        <Link to="/contract">
                        <li>
                            <i class="fa-solid fa-address-book"  style={{color: theme.color}}></i>
                            <a className="" href="#Contract" style={{color: theme.color}}> Contract</a>
                        </li>
                        </Link>
                        <FormControlLabel
                                sx={{
                                    position: 'absolute',
                                    right: 10,
                                    color: `${dark?'white':"black"}`,
                                    width: "fit-content"
                                }}
                                onChange={toggle}
                                control={<MaterialUISwitch sx={{
                                    m: 1,
                                 }} 
                                 checked={dark} 
                                  />}   
                                 
                                label={dark?"Dark":"Light"}
                            />
                    </ul>
                </nav>
        )
}