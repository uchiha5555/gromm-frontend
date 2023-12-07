import { Button } from 'antd'
import React, { useState } from 'react'
import { BracketsContainer, CustomButton } from './style'
import { Flex } from '@/components/basic';
import HostModal from '@/components/page/public/brackets/host_modal';

const Brackets = () => {
  const [visible, setVisible] = useState(false);

  return (
    <BracketsContainer>
      <Flex $style={{
        hAlign: 'flex-end'
      }}>
        <CustomButton onClick={() => setVisible(true)}>Host</CustomButton>
      </Flex>
      <HostModal visible={visible} setVisible={setVisible} />
    </BracketsContainer>
  )
}

export default Brackets