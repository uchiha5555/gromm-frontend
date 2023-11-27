import { useSelector } from "react-redux";
import { CustomButton, HeaderContainer } from "./style";
import { Flex, Link, P } from "@/components/basic";
import Image from "@/components/basic/img";

const Header = () => {
    const { isAuthenticated, user } = useSelector((state: any) => state.auth);

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
                <Flex $style={{
                    vAlign: 'center',
                    gap: '1rem'
                }}>
                    <Image src={`http://localhost:8000/${user.avatar}`} alt="" $style={{ w: '1.5rem', h: '1.5rem', bradius: '50%' }} />
                    <P>{user.fullName}</P>
                </Flex>
            )}
        </HeaderContainer>
    )
}

export default Header;
