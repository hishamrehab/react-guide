import Link from "next/link";
import logoImg from "@/assets/logo.png"
import classes from "./main-header.module.css"
import Image from "next/image";
import MainHeaderBackgound from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {

    
    return (
    <>
    <MainHeaderBackgound />
    <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logoImg.src} alt="A plate with food on it." priority />
           Next level Food
        </Link>

        <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink href="/meals" >Browse Meals</NavLink>
                </li>

                 <li>
                   <NavLink  href="/community">Foodies Community</NavLink>
                </li>
            </ul>
        </nav>
    </header>
    </>
    )
}