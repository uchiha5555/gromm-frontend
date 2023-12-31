import { GV } from "@/utils/style.util";
import styled from "styled-components";

export const SubmissionContainer = styled.div`
    position: relative;
    width: 100%;
    border: 2px solid var(--purple);
    border-radius: ${GV('radius-md')};
    z-index: 0;
`;

export const TabList = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    background: var(--bg);
    border-radius: ${GV('radius-md')} ${GV('radius-md')} 0 0;
    box-shadow: 0px 3px 15px ${GV('gray')};
    z-index: 1;
`;

export const TabItem = styled.div<{ isActive?: boolean, isFirst?: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10rem;
    height: 100%;
    padding: .5rem 2.5rem;
    cursor: pointer;

    ${({ isFirst }) => isFirst ? `border-radius: ${GV('radius-md')} 0 0 0;` : ''}
    ${({ isActive }) => isActive && `background: var(--purple);`}

    &:hover {
        background: var(--purple);
        ${({ isFirst }) => isFirst ? `border-radius: ${GV('radius-md')} 0 0 0;` : ''}
    }

    @media (max-width: 560px) {
        padding: .5rem 1.5rem
    }

    @media (max-width: 440px) {
        padding: .5rem;
    }
`;

export const BannerContainer = styled.div`
    position: absolute;
    top: 10px;
    left: 0;
    width: 100%;
    height: 15rem;
    /* filter: blur(5px); */
    z-index: -1;
`;

export const BannerTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10rem;
    width: 100%;
    font-size: ${GV('font-size-2')};
    font-weight: 900;
`

export const SubmissionContentWrapper = styled.div`
    margin-top: 16rem;
    padding: 2rem;
`;

export const SubmissionContent = styled.div`
    border-radius: ${GV('radius-md')};
    background: ${GV('gray-200')};
    padding: 2.5rem 1.8rem 2rem;
    height: 25rem;

    div {
        width: 100%;
        height: 100%;
        word-wrap: break-word;
        overflow-y: auto;

        &::-webkit-scrollbar {
            position: absolute;
            width: 4px;
            height: 8px;
        }

        &::-webkit-scrollbar-track {
            background: #eee;
            border-radius: 5px;
            box-shadow: #eee;
        }

        &::-webkit-scrollbar-thumb {
            background: #a6a7c7ac;
            border-radius: 5px;
        }

        &::-webkit-scrollbar-thumb:hover {
            background: var(--purple);
        }
    }
`;