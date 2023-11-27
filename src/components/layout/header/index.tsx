import { HeaderContainer } from "./style";
import { Flex, Link } from "@/components/basic";
import { Button } from "@/components/custom";

const Header = () => {
    return (
        <HeaderContainer>
            <Flex $style={{
                w: '100%',
                hAlign: 'flex-end'
            }}>
                <Link to="/signin"><Button>Sign In</Button></Link>
                <Link to="/signup"><Button>Sign Up</Button></Link>
            </Flex>
        </HeaderContainer>
    )
}

export default Header;
