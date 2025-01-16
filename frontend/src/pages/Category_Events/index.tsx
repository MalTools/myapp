// import { HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import CategoryKeywords from '@/components/CategoryKeywords';
import { PageContainer } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Typography } from 'antd';
import React, { useState } from 'react';
import App1 from './components/App1';
import App2 from './components/App2';

const { Text } = Typography;

const Events: React.FC = () => {
  const intl = useIntl();

  const [activeTabKey, setActiveTabKey] = useState('1'); // 当前激活的 Tab key

  const weatherKeywords = [
    'event schedule',
    'event organizers',
    'conference',
    'congress',
    'summit',
    'venues',
    'meetings',
    'music festivals',
    'concerts',
    'live music',
    'event tickets',
    'ticketing service',
    'wedding invitations',
    'wedding plan',
    'holiday calendar',
    'nations holidays',
    'tournament',
    'live matches',
    'sports event'
  ];

  const renderTabContent = () => {
    switch (activeTabKey) {
      case '1':
        return <App1 />;
        case '2':
          return <App2 />;
      //   case '3':
      //     return <App3 />;
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
        title: 'Events Category',
      }}
      content={<CategoryKeywords keywords={weatherKeywords} />}
      tabList={[
        {
          tab: (
            <>
              <img
                src={'/icons/Events-MyEventApp.webp'}
                alt="Icon 1"
                style={{ width: 20, borderRadius: '4px', marginLeft: 0, marginRight: 8 }}
              />{' '}
              App 1
            </>
          ),
          key: '1',
        },
        {
          tab: (
            <>
              <img
                src={'/icons/Events-Letsmeet.webp'}
                alt="Icon 2"
                style={{ width: 20, borderRadius: '4px', marginLeft: 0, marginRight: 8 }}
              />{' '}
              App 2
            </>
          ),
          key: '2',
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

export default Events;
