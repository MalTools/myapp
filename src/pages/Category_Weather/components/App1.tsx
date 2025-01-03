import { Button, Card, Divider, List, Typography } from 'antd';
import React, { useRef, useState } from 'react';
import QuestionItem from '../../../components/QuestionItem';
import SubmitResult from '@/components/SubmitResult';

const { Title } = Typography;

const App1: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -200, // 调整滚动距离
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 200, // 调整滚动距离
        behavior: 'smooth',
      });
    }
  };

  const questions = [
    'The app will access your precise location to update map view.',
    'The app will access your precise location for advertising.',
    'The app will access your',
  ];
  const [complete, setComplete] = useState(false);
  const handleSubmit = () => {
    setComplete(true);
  }

  return (
    <>
      <Card>
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
            margin: '0 auto',
          }}
        >
          {/* 小标题 */}
          <div style={{ textAlign: 'left', marginBottom: '16px' }}>
            <h2 style={{ margin: 0, fontSize: '20px' }}>
              <img
                src={'/icons/Weather-Transparentclockandweather.webp'}
                alt="Icon 1"
                style={{ width: 30, borderRadius: '6px', marginLeft: 0, marginRight: 8 }}
              />
              Transparent clock and weather
            </h2>
          </div>

          {/* 图片滑动区域 */}
          <div
            ref={carouselRef}
            style={{
              display: 'flex',
              justifyContent: 'space-around', //space-around
              alignItems: 'center',
              gap: '10px',
              overflowX: 'hidden', //scroll
              scrollBehavior: 'smooth',
              padding: '16px 0',
            }}
          >
            {[
              { src: '/images/Weather/Transparentclockandweather/image1.webp' },
              { src: '/images/Weather/Transparentclockandweather/image2.webp' },
              { src: '/images/Weather/Transparentclockandweather/image3.webp' },
              { src: '/images/Weather/Transparentclockandweather/image4.webp' },
              { src: '/images/Weather/Transparentclockandweather/image5.webp' },
              { src: '/images/Weather/Transparentclockandweather/image6.webp' },
              { src: '/images/Weather/Transparentclockandweather/image7.webp' },
              { src: '/images/Weather/Transparentclockandweather/image8.webp' },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  width: '180px',
                  flexShrink: 0,
                  textAlign: 'center',
                }}
              >
                <img
                  src={item.src}
                  alt={`Image ${index + 1}`}
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
                  }}
                />
              </div>
            ))}
          </div>

          {/* 左滑按钮 */}
          <button
            onClick={scrollLeft}
            style={{
              position: 'absolute',
              top: '50%',
              left: '-15px',
              transform: 'translateY(-50%)',
              zIndex: 1,
              background: 'white',
              border: '1px solid #ddd',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              cursor: 'pointer',
              fontSize: '20px',
            }}
          >
            &lt;
          </button>

          {/* 右滑按钮 */}
          <button
            onClick={scrollRight}
            style={{
              position: 'absolute',
              top: '50%',
              right: '-15px',
              transform: 'translateY(-50%)',
              zIndex: 1,
              background: 'white',
              border: '1px solid #ddd',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              cursor: 'pointer',
              fontSize: '20px',
            }}
          >
            &gt;
          </button>
        </div>

        {/* 描述文字 */}
        <div style={{ marginTop: '16px', textAlign: 'left', padding: '0 16px' }}>
          <Title level={4}>About this app:</Title>
          <p>
            🌤 <b>24x7 Weather Forecasts</b>
            <br />
            Stay updated with our detailed hourly weather forecasts. Check the latest weather
            conditions at any time, anywhere. From hourly to 15-day forecasts, we&#39;ve got you
            covered.
          </p>
          <p>
            ⚡ <b>Severe Weather Alerts</b>
            <br />
            Stay safe with all types of severe weather alerts. Our app instantly notifies you of
            potential severe weather, upcoming weather conditions, alerts for high or low
            temperatures, alerts for strong winds and more.
          </p>
          <p>
            🌎 <b>Radar Maps</b>
            <br />
            Track hazardous weather conditions with our radar maps. Switch between radar,
            high-resolution satellite, and rainfall, temperature and other maps for real-time
            tracking data.
          </p>
          <p>
            🌦 <b>Weather Forecasting</b>
            <br />
            We support live weather forecasts for global locations and provide detailed 7 to 15-day
            weather information. Get insights on rainfall forecasts, &#39;feels like&#39;
            temperatures, air quality index (AQI), UV index, humidity, visibility, wind direction,
            wind speed, and pressure changes.
          </p>
          <p>
            🏞 <b>Hourly Activity Forecast</b>
            <br />
            Planning an outdoor adventure? Our app&#39;s unique Indices feature provides weather
            suitability for popular outdoor activities like hiking, running, camping, kayaking,
            fishing, and hunting for the next 48 hours. Make the most of your outdoor pursuits with
            our easy to use weather insights.
          </p>
          <p>
            📱 <b>Customizable Widgets</b>
            <br />
            Enhance your home screen with our customizable widgets. Get weather updates right on
            your home screen with our beautiful weather &amp; clock widgets. Choose from a variety
            of styles and sizes to match your aesthetic.
          </p>
          <p>
            🌙 <b>Sun &amp; Moon Tracker</b>
            <br />
            Stay in sync with nature with our dynamic display of sunrise and sunset times.
          </p>
        </div>
      </Card>
      <Divider style={{ borderColor: 'blue' }} orientation="center">
        Please answer your perception in the following privacy scenarios: Do you feel comfortable for this?
      </Divider>
      <List
        bordered
        itemLayout="vertical"
        dataSource={questions}
        renderItem={(question, index) => <QuestionItem question={question} index={index} />}
      />
      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <Button type="primary" onClick={handleSubmit}>Submit</Button>
      </div>
      {complete&&<SubmitResult />}
    </>
  );
};

export default App1;
