import * as styled from './AuthHeader.styled';
import HEADER_BACKGROUND from '../../../../assets/images/header-background.svg';
import LOGO from '../../../../assets/images/Logo.svg';
import { useLocation, useNavigate } from 'react-router-dom';

export const AuthHeader = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const goPage = () => {
        if(pathname === '/signin') {
            navigate('/signup')
        } else {
            navigate('/signin')
        }
    }

    const goDemo = () => {
        navigate('/demo')
    }
    
    return (
        <styled.Container backgroundImage={HEADER_BACKGROUND}>
            <styled.LogoContainer href='/'>
                <styled.Logo src={LOGO} alt="sign up" />
            </styled.LogoContainer>
            <styled.Wrapper>
                <styled.LoginButton onClick={goPage}>
                    <styled.Text>{pathname === '/signin' ? 'Sign Up' : 'Login'}</styled.Text>
                </styled.LoginButton>
                <styled.SupportButton onClick={goDemo}>
                    <styled.Text color={'white'}>GET DEMO</styled.Text>
                </styled.SupportButton>
            </styled.Wrapper>
        </styled.Container>
    )
}