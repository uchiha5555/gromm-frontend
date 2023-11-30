import { GV } from '@/utils/style.util';
import styled from 'styled-components';
import Banner from '@/assets/img/gif_background.png';

export const CustomButton = styled.button`
    padding: 0.5rem 2rem;
    background: ${GV('purple')};
    border-radius: ${GV('radius-xs')};

    @media (max-width: 480px) {
        width: 100%;
    }
`;

export const UploadWrapper = styled.div`
    display: flex;
    cursor: pointer;
`;

export const UploadButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${Banner});
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 12rem;
`