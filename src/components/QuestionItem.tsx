import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import type { RadioChangeEvent } from 'antd';
import { Input, List, Radio } from 'antd';
import React, { useState } from 'react';

interface QuestionItemProps {
  question: string;
  index: number;
}

const QuestionItem: React.FC<QuestionItemProps> = ({ question, index }) => {
  const [needMoreInfo, setNeedMoreInfo] = useState(false);

  const [value, setValue] = useState(1);

  const handleRadioChange = (e: RadioChangeEvent) => {
    // console.log('radio checked', e.target.value);
    setValue(e.target.value);
    if (e.target.value === 4) {
      setNeedMoreInfo(true);
    } else {
      setNeedMoreInfo(false);
    }
  };

  return (
    <List.Item key={index}>
      <List.Item.Meta title={question} />

      <Radio.Group
        onChange={handleRadioChange}
        value={value}
        style={{ display: 'flex', justifyContent: 'space-around' }}
      >
        <Radio value={1}>
          {' '}
          <FrownOutlined style={{ color: 'red', marginRight: 6 }} />
          Uncomfortable
        </Radio>
        <Radio value={2}>
          {' '}
          <MehOutlined style={{ color: 'orange', marginRight: 6 }} />
          So-so{' '}
        </Radio>
        <Radio value={3}>
          {' '}
          <SmileOutlined style={{ color: 'green', marginRight: 6 }} />
          Comfortable
        </Radio>
        <Radio value={4}>Need more information to assess</Radio>
      </Radio.Group>

      {needMoreInfo && (
        <List.Item.Meta
          description={
            <Input
              showCount
              maxLength={30}
              placeholder="Please specify what additional information you need to make an informed decision."
            />
          }
        />
      )}
    </List.Item>
  );
};

export default QuestionItem;
