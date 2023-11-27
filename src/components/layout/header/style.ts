import { GV } from "@/utils/style.util";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  padding: 2rem 2rem 1rem;
  background: ${GV('gray')};
  width: 100%;
`;

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