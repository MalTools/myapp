// import { HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Divider, Flex, Tabs, Tag } from 'antd';
import React from 'react';
import App1 from './components/App1';
import App2 from "@/pages/Category_Weather/components/App2";
import App3 from "@/pages/Category_Weather/components/App3";

const Weather: React.FC = () => {
  const intl = useIntl();

  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <PageContainer
      content={intl.formatMessage({
        id: 'pages.categories.weather.title',
        defaultMessage: 'Here are the apps of the Weather category, whose descriptive keywords include:',
      })}
    >
      <Flex gap="4px 0" wrap>
        <Tag bordered={false} color="magenta" style={{ fontSize: '14px' }}>
          weather information
        </Tag>
        <Tag bordered={false} color="red" style={{ fontSize: '14px' }}>
        weather forcast
        </Tag>
        <Tag bordered={false} color="volcano" style={{ fontSize: '14px' }}>
          weather map
        </Tag>
        <Tag bordered={false} color="orange" style={{ fontSize: '14px' }}>
          weather alerts
        </Tag>
        <Tag bordered={false} color="gold" style={{ fontSize: '14px' }}>
          air quality
        </Tag>
        <Tag bordered={false} color="lime" style={{ fontSize: '14px' }}>
          air pollution
        </Tag>
        <Tag bordered={false} color="green" style={{ fontSize: '14px' }}>
        environmental monitoring
        </Tag>
        <Tag bordered={false} color="cyan" style={{ fontSize: '14px' }}>
        temperature sensor
        </Tag>
        <Tag bordered={false} color="blue" style={{ fontSize: '14px' }}>
        earthquake information
        </Tag>
        <Tag bordered={false} color="geekblue" style={{ fontSize: '14px' }}>
        tide information
        </Tag>
        <Tag bordered={false} color="purple" style={{ fontSize: '14px' }}>
        weather widget
        </Tag>
      </Flex>

      <Divider style={{ borderColor: 'blue' }} orientation="center">
        We have selected three representative apps. Please complete the privacy assessment for all of them.
      </Divider>

      <Tabs
        onChange={onChange}
        type="card"
        centered
        items={[
          {
            label: (
              <>
                <img
                src={'/icons/Weather-Transparentclockandweather.webp'}
                alt="Icon 1"
                style={{ width: 20, borderRadius: '4px', marginLeft: 0, marginRight: 8 }} /> App 1
              </>
            ),
            key: '1',
            children: <App1 />,
            icon: ''
          },
          {
            label: 'App 2',
            key: '2',
            children: <App2/>,
          },
          {
            label: 'App 3',
            key: '3',
            children: <App3 />,
          },
        ]}
      />
    </PageContainer>
  );
};

export default Weather;
