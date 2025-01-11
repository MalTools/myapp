import React, { useState } from 'react';
import { List, Button, message } from 'antd';
import QuestionItem from './QuestionItem';
import Card from 'antd/es/card/Card';

interface Question {
  question: React.ReactNode;
  description: React.ReactNode;
}

interface Answer {
  answer: number;
  moreInfo?: string;
}

interface DynamicQuestionListProps {
  questions: Question[];
  currentUser: string;
  appNumber: number;
  onSubmitSuccess?: () => void;  //可选自定义行为
}

const DynamicQuestionList: React.FC<DynamicQuestionListProps> = ({
  questions,
  currentUser,
  appNumber,
  onSubmitSuccess,  //可选自定义行为
}) => {
  const [answers, setAnswers] = useState<{ [key: number]: Answer }>({});
  const [complete, setComplete] = useState(false);

  const handleAnswerChange = (index: number, value: Answer) => {
    setAnswers((prev) => ({
      ...prev,
      [index]: value,
    }));
  };

  const defaultSuccessHandler = () => {
    console.log('Survey was successfully submitted!');
    message.success('感谢您的参与！调查问卷已提交成功。');
  };

  const handleSubmit = async () => {
    if (questions.length === 0) {
      message.error('问题列表不能为空！');
      return;
    }

    const questionAnswerList = questions.map((q, index) => ({
      question: q.question,
      question_number: index + 1,
      answer: answers[index]?.answer || 0,
      moreInfo: answers[index]?.moreInfo || undefined,
    }));

    const payload = {
      name: currentUser || 'Anonymous',
      status: 'weather',
      app_number: appNumber,
      responses: questionAnswerList,
    };

    console.log('提交的内容:', payload);

    try {
      const response = await fetch('http://localhost:5000/api/submit_questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        message.success('提交成功！');
        setComplete(true);
        (onSubmitSuccess || defaultSuccessHandler)(); // 如果传入了回调，优先调用传入的；否则使用默认行为
      } else {
        const result = await response.json();
        message.error(`提交失败: ${result.message}`);
      }
    } catch (error) {
      console.error('提交错误:', error);
      message.error('Please complete your answers！');
    }
  };

  return (
    <>
      <List
        bordered
        itemLayout="vertical"
        dataSource={questions}
        renderItem={(question, index) => (
          <QuestionItem question={question.question} description={question.description}index={index} onAnswerChange={handleAnswerChange} />
        )}
      />
      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <Button type="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
      {complete && <div>Thank you for completing the survey!</div>}
    </>
  );
};

export default DynamicQuestionList;