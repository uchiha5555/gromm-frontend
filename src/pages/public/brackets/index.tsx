import React, { useCallback, useEffect, useState } from 'react';
import { BracketsContainer, CustomButton } from './style'
import { Flex, Grid, P } from '@/components/basic';
import { useDispatch, useSelector } from 'react-redux';
import { bracketActions } from '@/redux/bracket';
import HostModal from '@/components/page/public/brackets/host_modal';
import BracketCard from '@/components/page/public/bracket_card';
import { getBrakets } from '@/actions/bracket';
import { Radio, RadioChangeEvent } from 'antd';

const Brackets = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state.auth);
  const { brackets } = useSelector((state: any) => state.bracket);
  const [ isMyHost, setMyHost ] = useState('all');
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    (async () => {
      const result = await getBrakets(user.id);
      if (result.success)
        dispatch(bracketActions.getBrackets(result.model));
    })();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date()); 
    }, 1000); 

    return () => clearInterval(interval);
  }, []); 


  const renderCards = useCallback(() => (
    isMyHost === 'mine'
      ? brackets.filter((item: any) => item.creator._id === user.id).map((item: any, key: number) => <BracketCard model={item}  key={key} />)
      : brackets.map((item: any, key: number) => <BracketCard model={item} key={key} />)
  ), [brackets, isMyHost]);

  return (
    <BracketsContainer>
      <Flex $style={{
        hAlign: 'space-between',
        vAlign: 'center'
      }}>
        {user.isHost && <CustomButton onClick={() => dispatch(bracketActions.setVisible(true))}>Host</CustomButton>}
        {user.isHost && (
          <Radio.Group defaultValue="all" buttonStyle="solid" onChange={(e: RadioChangeEvent) => setMyHost(e.target.value)}>
            <Radio.Button value="all">All</Radio.Button>
            <Radio.Button value="mine">My Hosts</Radio.Button>
          </Radio.Group>
        )}
      </Flex>
      <Grid $style={{
        columns: '4',
        gap: '2rem',
        justifyItems: 'space-between',
        queries: {
          1440: {
            columns: '3'
          },
          1200: {
            columns: '2'
          },
          768: {
            columns: '1',
            justifyItems: 'center'
          }
        }
      }}>
        {renderCards()}
      </Grid>
      <HostModal />
    </BracketsContainer>
  )
}

export default Brackets;