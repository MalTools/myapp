import React from 'react';
import { Result, Typography } from 'antd';
import { HeartTwoTone } from '@ant-design/icons';

const { 
  Text } = Typography;

const SubmitResult: React.FC = () => (
  <Result
    status="success"
    title="Successfully complete the privacy assessment!"
    subTitle={
      <>
      <Text>Don't forget to complete the <strong>Other Apps Tabs</strong> in this category! </Text>
      <HeartTwoTone twoToneColor="#eb2f96" />
      </>
    
  }
    // extra={[
    //   <Button type="primary" key="console">
    //     Go Console
    //   </Button>,
    // ]}
  />
);

export default SubmitResult;