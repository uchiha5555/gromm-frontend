import { useDispatch, useSelector } from "react-redux";
import { CustomButton, Dropdown, HeaderContainer, UserAvatar, UserInfo } from "./style";
import { Flex, Link, P } from "@/components/basic";
import Image from "@/components/basic/img";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authActions } from "@/redux/auth";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isAuthenticated, user } = useSelector((state: any) => state.auth);
    const Logout = () => {
        localStorage.removeItem('token');
        dispatch(authActions.setUser({ isAuthenticated: false, user: null }))
        navigate('/');
    }

    const [isDropdown, setIsDropdown] = useState(false);
    
    const dropdownRef: any = useRef(null);
    const menuButtonRef:any = useRef(null);

    useEffect(() => {
        const windowClick = (e: any) => {
            if(isDropdown === true) {
                if (dropdownRef && dropdownRef.current !== null) {
                    if (!dropdownRef.current.contains(e.target)) {
                        setIsDropdown(false);
                    }
                }
            }
            else {
                if(menuButtonRef && menuButtonRef.current !== null){
                    if(menuButtonRef.current.contains(e.target)){
                        setIsDropdown(true)
                    }
                }
            }
        };

        window.addEventListener("click", windowClick);

        return () => window.removeEventListener("click", windowClick);
    }, [isDropdown]);

    return (
        <HeaderContainer>
            {!isAuthenticated 
            ? (
                <Flex $style={{
                    gap: '1rem'
                }}>
                    <Link to="/signin"><CustomButton>Sign In</CustomButton></Link>
                    <Link to="/signup"><CustomButton>Sign Up</CustomButton></Link>
                </Flex>
            )
            : (
                <UserInfo>
                    <UserAvatar ref={menuButtonRef}>
                        <Image src={`http://localhost:8000/${user.avatar}`} alt="" $style={{ w: '1.5rem', h: '1.5rem', bradius: '50%' }} />
                        <P>{user.fullName}</P>
                    </UserAvatar>
                    <Dropdown isDropdown={isDropdown} ref={dropdownRef}>
                        <P>Settings</P>
                        <P onClick={() => { setIsDropdown(false); Logout(); }}>Logout</P>
                    </Dropdown>
                </UserInfo>
            )}
        </HeaderContainer>
    )
}

export default Header;
