import { useEffect, useState } from 'react';
import * as styled from './IndexHeader.styled';
import LOGO from '../../../../assets/images/Logo.svg';
import MENUICON from '../../../../assets/images/menu.svg';
import HEADER_BACK from '../../../../assets/images/header-background.svg';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Menu, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import { slide as SideMenu } from 'react-burger-menu'
import { HashLink } from 'react-router-hash-link';

export const IndexHeader = () => {
    const navigate = useNavigate();
    const authed = useSelector((state: any) => state.auth.authed);
    const [scrollDir, setScrollDir] = useState("up");
    const [showMenu, setShowMenu] = useState(false);
    const [showServices, setShowServices] = useState(false);

    useEffect(() => {
        if (authed) {
            navigate('/reservations')
        }
    }, [authed, navigate])

    useEffect(() => {
        const threshold = 0;
        let lastScrollY = window.pageYOffset;
        let ticking = false;

        const updateScrollDir = () => {
            const scrollY = window.pageYOffset;

            if (Math.abs(scrollY - lastScrollY) < threshold) {
                ticking = false;
                return;
            }
            if (scrollY > lastScrollY && scrollY - threshold > 111) {
                setScrollDir("down")
            }
            if (scrollY < lastScrollY) {
                setScrollDir("up")
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };

        const onScroll = () => {
            let timer: any;

            if (timer) {
                clearTimeout(timer);
            }

            if (!ticking) {
                window.requestAnimationFrame(updateScrollDir);
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollDir]);

    const goDemo = () => {
        navigate('/demo')
    }

    const goSignin = () => {
        navigate('/signin')
    }

    const goSignup = () => {
        navigate('/signup')
    }

    const onClickMenu = () => {
        setShowMenu((prev) => !prev)
    }

    return (
        <>
            <div id="outer-container">
                <SideMenu id="push" pageWrapId={'page-wrap'} width={230} outerContainerId={'outer-container'} right onClose={() => { setShowMenu(false) }} isOpen={showMenu}>
                    <HashLink onClick={() => { setShowMenu(false); setShowServices(false) }} className="menu-item" to="/#booking">Booking</HashLink>
                    <HashLink onClick={() => {
                        setShowServices(!showServices)
                    }} className="menu-item" to='/#pet-services'>Pet Services</HashLink>
                    {showServices && (
                        <styled.ServiceList>
                            <li onClick={() => { setShowServices(false); setShowMenu(false) }}>Veterinarian clinics and animal hospitals</li>
                            <li onClick={() => { setShowServices(false); setShowMenu(false) }}>Dog walking and pet sitting services</li>
                            <li onClick={() => { setShowServices(false); setShowMenu(false) }}>Dog boarding and daycare facilities</li>
                            <li onClick={() => { setShowServices(false); setShowMenu(false) }}>Pet-friendly hotels and accommodations</li>
                            <li onClick={() => { setShowServices(false); setShowMenu(false) }}>Pet adoption and rescue services</li>
                            <li onClick={() => { setShowServices(false); setShowMenu(false) }}>Pet transportation services</li>
                            <li onClick={() => { setShowServices(false); setShowMenu(false) }}>Pet photographers and videographers</li>
                            <li onClick={() => { setShowServices(false); setShowMenu(false) }}>Pet waste removal and cleanup services</li>
                            <li onClick={() => { setShowServices(false); setShowMenu(false) }}>Pet trainers and behaviorists</li>
                            <li onClick={() => { setShowServices(false); setShowMenu(false) }}>Pet hospice and end-of-life care providers</li>
                            <li onClick={() => { setShowServices(false); setShowMenu(false) }}>Pet-friendly event planning and coordination</li>
                            <li onClick={() => { setShowServices(false); setShowMenu(false) }}>More...</li>
                        </styled.ServiceList>
                    )}
                    <HashLink onClick={() => { setShowMenu(false); setShowServices(false) }} className="menu-item" to="/#how-it-work">How it works</HashLink>
                    <HashLink onClick={() => { setShowMenu(false); setShowServices(false) }} className="menu-item" to="/faq">FAQ</HashLink>
                    <HashLink id="contact" className="menu-item" to="/">Contact</HashLink>
                </SideMenu>
            </div>
            <styled.Container show={scrollDir === "down" ? false : true} backgroundImage={HEADER_BACK}>
                <styled.LogoWrapper href='/'>
                    <styled.Logo src={LOGO} alt="logo" />
                </styled.LogoWrapper>
                <styled.Link to="/#booking">BOOKING</styled.Link>
                <Menu menuButton={<styled.Link to={"#"}>PET SERVICES</styled.Link>}>
                    <MenuItem>Veterinarian clinics and animal hospitals</MenuItem>
                    <MenuItem>Dog walking and pet sitting services</MenuItem>
                    <MenuItem>Dog boarding and daycare facilities</MenuItem>
                    <MenuItem>Pet-friendly hotels and accommodations</MenuItem>
                    <MenuItem>Pet adoption and rescue services</MenuItem>
                    <MenuItem>Pet transportation services</MenuItem>
                    <MenuItem>Pet photographers and videographers</MenuItem>
                    <MenuItem>Pet waste removal and cleanup services</MenuItem>
                    <MenuItem>Pet trainers and behaviorists</MenuItem>
                    <MenuItem>Pet hospice and end-of-life care providers</MenuItem>
                    <MenuItem>Pet-friendly event planning and coordination</MenuItem>
                    <MenuItem>More...</MenuItem>
                </Menu>
                <styled.Link to="/#how-it-work">HOW IT WORKS</styled.Link>
                <styled.Link to="/faq">FAQ</styled.Link>
                <styled.ButtonWrapper>
                    <styled.Button onClick={goSignin}>Login</styled.Button>
                    <styled.Button onClick={goSignup}>Sign Up</styled.Button>
                    <styled.Support onClick={goDemo}>
                        GET DEMO
                    </styled.Support>
                    <styled.Menu onClick={onClickMenu}>
                        <styled.MenuIcon src={MENUICON} />
                    </styled.Menu>
                </styled.ButtonWrapper>
            </styled.Container>
        </>
    )
}