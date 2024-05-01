"use client"
import React, { usestate } from 'react'
import styles from "./links.module.css"
import Link from 'next/link';
import NavLink from './navLink/navLink';
 
const Links = () => {

const links = [
    {
        title: "Homepage",
        path: "/",
    },
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Contact",
        path: "/contact",
    },
    {
        title: "Events",
        path: "/event",
    },
];

//const Links = () => {
    //const [open, setOpen] = usestate(false)


    //ADD COMMENTED BACK FOR AUTHENTICATION OF ADMIN
    //const session = true;
   // const isAdmin = true;

  return (
    <div className={styles.links}>
        {links.map((link=>
        <NavLink item={link} key={link.title}/>
        ))}

    </div>
        
  );
};

export default Links;