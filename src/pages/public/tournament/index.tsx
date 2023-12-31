import React, { useEffect, useState } from 'react'
import { Flex, Span } from '@/components/basic';
import { EnterButton, FeaturedTrackContainer, ProgressContainer, ProgressLine, StepContainer, TournamentContainer } from './style'
import { GV } from '@/utils/style.util'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import _ROUTERS from '@/constants/route.constant';
import { getBracketByUrl } from '@/actions/bracket';
import Loading from '@/components/custom/loading';

const Tournament = () => {
  const navigate = useNavigate();
  const { hash, pathname, search } = useLocation();
  const [tabIndex, setTabIndex] = useState(1);
  const [bracket, setBracket] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const url = pathname.split('/')[1];

  const onEnterBracket = () => {
    setTabIndex(tabIndex + 1);
    const router = tabIndex === 1 ? _ROUTERS._QUALIFY : tabIndex === 2 ? _ROUTERS._WINNER : _ROUTERS._TOURNAMENT;
    navigate(router);
  }

  useEffect(() => {
    setTimeout(async () => {
      const result = await getBracketByUrl(url);
      if (result.success) {
        setBracket(result.model);
        setLoading(false);
      } else {
        navigate('/404');
      }
    }, 0);
  }, [url]);

  if (loading) return <Loading />

  return (
    <TournamentContainer>
      <Flex $style={{
        flex: '1',
        fDirection: 'column',
        gap: '1.5rem',
        w: '100%'
      }}>
        <Flex $style={{
          vAlign: 'center',
          gap: '2rem',
          queries: {
            768: {
              fDirection: 'column'
            }
          }
        }}>
          {tabIndex < 3 && <EnterButton onClick={() => onEnterBracket()}>{tabIndex === 1 ? `Enter Bracket (${bracket.posts.length}/${bracket.max_player})` : `Voting in Progress`}</EnterButton>}
          <ProgressContainer>
            <ProgressLine />
            <Flex $style={{
              fDirection: 'column',
              gap: '0.5rem'
            }}>
              <Span $style={{
                size: GV('font-size-6'),
                queries: {
                  768: {
                    size: GV('font-size-7')
                  }
                }
              }}>00/00/00</Span>
              <StepContainer isActive={tabIndex === 1}>1</StepContainer>
              <Span $style={{
                size: GV('font-size-6'),
                align: 'left',
                queries: {
                  768: {
                    size: GV('font-size-7')
                  }
                },
                transform: 'uppercase' }}>SUBMISSION PERIOD</Span>
            </Flex>
            <Flex $style={{
              fDirection: 'column',
              vAlign: 'center',
              gap: '0.5rem',
            }}>
              <Span $style={{
                size: GV('font-size-6'),
                queries: {
                  768: {
                    size: GV('font-size-7')
                  }
                }
              }}>00/00/00</Span>
              <StepContainer isActive={tabIndex === 2}>2</StepContainer>
              <Span $style={{
                size: GV('font-size-6'),
                align: 'center',
                queries: {
                  768: {
                    size: GV('font-size-7')
                  }
                },
                transform: 'uppercase' }}>QUALIFY / VOTING</Span>
            </Flex>
            <Flex $style={{
              fDirection: 'column',
              vAlign: 'flex-end',
              gap: '0.5rem'
            }}>
              <Span $style={{
                size: GV('font-size-6'),
                queries: {
                  768: {
                    size: GV('font-size-7')
                  }
                }
              }}>00/00/00</Span>
              <StepContainer isActive={tabIndex === 3}>3</StepContainer>
              <Span $style={{
                size: GV('font-size-6'),
                align: 'right',
                queries: {
                  768: {
                    size: GV('font-size-7')
                  }
                },
                transform: 'uppercase' }}>SUBMISSION PERIOD</Span>
            </Flex>
          </ProgressContainer>
        </Flex>
        <Outlet />
      </Flex>
      <FeaturedTrackContainer />
    </TournamentContainer>
  )
}

export default Tournament