import { GV } from "@/utils/style.util";
import styled from "styled-components";

export const BracketsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 2rem;
    width: 100%;
    height: 100%;
`

export const CustomButton = styled.button`
    display: flex;
    height: 2.5rem;
    padding: 0.75rem 2rem;
    justify-content: center;
    align-items: center;
    gap: 1.25rem;
    border-radius: 0.5rem;
    background: ${GV('purple')};
`;