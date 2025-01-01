import React from 'react';
import { Button, Result } from 'antd';

const SubmitResult: React.FC = () => (
  <Result
    status="success"
    title="Successfully complete the privacy assessment!"
    subTitle="Thank you for your feedback!"
    // extra={[
    //   <Button type="primary" key="console">
    //     Go Console
    //   </Button>,
    // ]}
  />
);

export default SubmitResult;