import { Content } from '../components/Content';
import { IndexFooter } from '../components/IndexFooter';
import { IndexHeader } from '../components/IndexHeader';
import * as styled from './IndexLayout.styled';

export const IndexLayout = () => {
    return (
        <styled.BodyWrapper>
            <styled.ContentWrapper>
                <IndexHeader />
                <Content />
                <IndexFooter />
            </styled.ContentWrapper>
        </styled.BodyWrapper>
    )
}