import type { RadioChangeEvent } from 'antd';
import { Input, List, Radio, Typography } from 'antd';
import React, { useState } from 'react';
const { Text } = Typography;

interface QuestionItemAttentionProps {
  question: string;
  // description: string;
  index: number;
  onAnswerChange: (index: number, value: { answer: number }) => void; // 回调函数
}

const QuestionItemAttention: React.FC<QuestionItemAttentionProps> = ({
  question,
  // description,
  index,
  onAnswerChange,
}) => {
  const [value, setValue] = useState(0); // 存储用户选择的答案
  // const [needMoreInfo, setNeedMoreInfo] = useState(false); // 控制是否显示额外信息输入框
  // const [moreInfo, setMoreInfo] = useState(''); // 存储额外信息

  const handleRadioChange = (e: RadioChangeEvent) => {
    const selectedValue = e.target.value; // 获取用户选择的值
    setValue(selectedValue);

    // // 如果选择了 "Need more information to assess"，显示输入框
    // if (selectedValue === 6) {
    //   setNeedMoreInfo(true);
    // } else {
    //   setNeedMoreInfo(false);
    //   setMoreInfo(""); // 清空额外信息
    // }

    // 调用父组件的回调函数，传递答案
    onAnswerChange(index, { answer: selectedValue });
  };

  const handleMoreInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const info = e.target.value;
    // setMoreInfo(info);

    // 同时更新父组件的状态
    onAnswerChange(index, { answer: value });
  };

  return (
    <List.Item key={index}>
      <List.Item.Meta
        title={question}
        // description={description}
      />

      {/* 单选按钮组 */}
      <Radio.Group
        onChange={handleRadioChange}
        value={value}
        style={{ display: 'flex', justifyContent: 'space-around' }}
      >
        <Radio value={1}>Social</Radio>
        <Radio value={2}>Weather</Radio>
        <Radio value={3}>Shopping</Radio>
        <Radio value={4}>Business</Radio>
      </Radio.Group>

    </List.Item>
  );
};

export default QuestionItemAttention;
