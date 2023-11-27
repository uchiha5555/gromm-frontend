import styled, { keyframes } from 'styled-components';

import { GV } from '@/utils/style.util';

export const ListContainer = styled.div`
  cursor: pointer;
`;

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding-top: 2rem;
  padding-left: 0.5rem;
  max-width: 200px;
  width: 100%;
`;

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const ListItemContainer = styled.div<{ isActive: boolean }>`
  display: flex;
  align-self: center;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  width: 100%;
  border-radius: 8px;

  ${({ isActive }) => isActive ? `background: ${GV('purple')};` : `background: ${GV('gray')};`}

  &:hover {
    background: ${GV('purple')};
  }
`;