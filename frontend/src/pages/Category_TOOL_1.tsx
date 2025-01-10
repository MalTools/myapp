import { HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Alert, Card, Typography } from 'antd';
import React from 'react';

const TOOL1: React.FC = () => {
  const intl = useIntl();
  return (
    <PageContainer
      content={intl.formatMessage({
        id: 'pages.categories.weather.title',
        defaultMessage: 'This is the Weather category',
      })}
    >
      <Card>
        <Alert
          message={intl.formatMessage({
            id: 'pages.welcome.alertMessage',
            defaultMessage: 'Weather Apps.',
          })}
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 48,
          }}
        />
        <Typography.Title level={2} style={{ textAlign: 'center' }}>
          <SmileTwoTone /> Weather <HeartTwoTone twoToneColor="#eb2f96" /> You
        </Typography.Title>
      </Card>
      <p style={{ textAlign: 'center', marginTop: 24 }}>
        Want to add more pages? Please refer to{' '}
        <a href="https://pro.ant.design/docs/block-cn" target="_blank" rel="noopener noreferrer">
          use block
        </a>
        。
      </p>
    </PageContainer>
  );
};

export default TOOL1;
