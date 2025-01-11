// import { HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Flex, Tag, Typography } from 'antd';
import React, { useState } from 'react';
import App1 from './components/App1';
import CategoryKeywords from '@/components/CategoryKeywords';
const { Text } = Typography;

const Weather: React.FC = () => {
  const intl = useIntl();

  const [activeTabKey, setActiveTabKey] = useState('1'); // 当前激活的 Tab key

  const weatherKeywords = [
    'weather information',
    'weather forecast',
    'weather map',
    'weather alerts',
    'air quality',
    'air pollution',
    'environmental monitoring',
    'temperature sensor',
    'earthquake information',
    'tide information',
    'weather widget',
  ];

  const renderTabContent = () => {
    switch (activeTabKey) {
      case '1':
        return <App1 />;
      case '2':
        return (
          <div>
            <h3>App 2 Content</h3>
            <p>This is the content for App 2.</p>
          </div>
        );
      case '3':
        return (
          <div>
            <h3>App 3 Content</h3>
            <p>This is the content for App 3.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <PageContainer
      fixedHeader
      // content={intl.formatMessage({
      //   id: 'pages.categories.weather.title',
      //   defaultMessage: 'In the Weather category, whose descriptive keywords include:',
      // })}
      header={{
        title: 'Weather Category',
      }}
      content={
        <CategoryKeywords keywords={weatherKeywords} />
      }
      tabList={[
        {
          tab: (
            <>
              <img
                src={'/icons/Weather-Transparentclockandweather.webp'}
                alt="Icon 1"
                style={{ width: 20, borderRadius: '4px', marginLeft: 0, marginRight: 8 }}
              />{' '}
              App 1
            </>
          ),
          key: '1',
        },
        {
          tab: 'App 2',
          key: '2',
        },
        {
          tab: 'App 3',
          key: '3',
        },
      ]}
      tabProps={{
        type: 'card',
        tabBarGutter: 4,
        onChange: (key) => setActiveTabKey(key),
      }}
    >
      {renderTabContent()} {/* 动态渲染内容 */}
      
    </PageContainer>
  );
};

export default Weather;
