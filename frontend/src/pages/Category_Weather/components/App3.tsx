import {Button, Card, Divider, List, message, Typography} from 'antd';
import React, { useRef, useState } from 'react';
import QuestionItem from '../../../components/QuestionItem';
import SubmitResult from '@/components/SubmitResult';
import { useModel } from "@umijs/max";

const { Title } = Typography;

//在这里添加问题描述
const DynamicQuestionList: React.FC<{ currentUser: string }> = ({ currentUser }) => {
  const [questions] = useState([
    "The app will access your precise location to update map view.",
    "The app will access your precise location for advertising.",
    "The app will access your",
    "The app will access access 123"
  ]);

  const [answers, setAnswers] = useState<{ [key: number]: { answer: number; moreInfo?: string } }>(
    {}
  );
  const [complete, setComplete] = useState(false);

  const handleAnswerChange = (index: number, value: { answer: number; moreInfo?: string }) => {
    setAnswers((prev) => ({
      ...prev,
      [index]: value,
    }));
  };


  const handleSubmit = async () => {
    if (questions.length === 0) {
      message.error("问题列表不能为空！");
      return;
    }

    // 构建问题和答案的对应关系
    const questionAnswerList = questions.map((question, index) => ({
      question,
      question_number: index + 1, // 问题编号从 1 开始
      answer: answers[index]?.answer || 0, // 如果用户没有回答，默认为 0
      moreInfo: answers[index]?.moreInfo || undefined, // 如果用户没有提供额外信息，则为 undefined
    }));

    // 构建最终提交的数据
    const payload = {
      name: currentUser || "Anonymous", // 如果未获取到用户名，则默认使用 "Anonymous"
      status: "weather", // 固定的状态值，作为数据库中表的名称存储
      app_number: 3, // 固定的应用编号，不同应用使用不同编号
      responses: questionAnswerList, // 问题和答案的列表
    };

    console.log("提交的内容:", payload);

    try {
      const response = await fetch("http://localhost:5000/api/submit_questions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        message.success("提交成功！");
        setComplete(true);
      } else {
        const result = await response.json();
        message.error(`提交失败: ${result.message}`);
      }
    } catch (error) {
      console.error("提交错误:", error);
      message.error("提交失败，请稍后重试！");
    }
  };

  return (
    <>
      <List
        bordered
        itemLayout="vertical"
        dataSource={questions}
        renderItem={(question, index) => (
          <QuestionItem
            question={question}
            index={index}
            onAnswerChange={handleAnswerChange}
          />
        )}
      />
      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <Button type="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
      {complete && <SubmitResult />}
    </>
  );
};

const App3: React.FC = () => {
  const { initialState } = useModel("@@initialState");
  const currentUser = initialState?.currentUser?.name || "Anonymous"; // 默认值为 "Anonymous"
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
            <div style={{textAlign: 'left', marginBottom: '16px'}}>
              <h2 style={{margin: 0, fontSize: '20px'}}>
                <img
                  src={'/icons/Weather-Transparentclockandweather.webp'}
                  alt="Icon 1"
                  style={{width: 30, borderRadius: '6px', marginLeft: 0, marginRight: 8}}
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
                {src: '/images/Weather/Transparentclockandweather/image1.webp'},
                {src: '/images/Weather/Transparentclockandweather/image2.webp'},
                {src: '/images/Weather/Transparentclockandweather/image3.webp'},
                {src: '/images/Weather/Transparentclockandweather/image4.webp'},
                {src: '/images/Weather/Transparentclockandweather/image5.webp'},
                {src: '/images/Weather/Transparentclockandweather/image6.webp'},
                {src: '/images/Weather/Transparentclockandweather/image7.webp'},
                {src: '/images/Weather/Transparentclockandweather/image8.webp'},
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
              type="button"
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
              type="button"
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
          <div style={{marginTop: '16px', textAlign: 'left', padding: '0 16px'}}>
            <Title level={4}>About this app:</Title>
            <p>
              🌤 <b>24x7 Weather Forecasts</b>
              <br/>
              Stay updated with our detailed hourly weather forecasts. Check the latest weather
              conditions at any time, anywhere. From hourly to 15-day forecasts, we&#39;ve got you
              covered.
            </p>
            <p>
              ⚡ <b>Severe Weather Alerts</b>
              <br/>
              Stay safe with all types of severe weather alerts. Our app instantly notifies you of
              potential severe weather, upcoming weather conditions, alerts for high or low
              temperatures, alerts for strong winds and more.
            </p>
            <p>
              🌎 <b>Radar Maps</b>
              <br/>
              Track hazardous weather conditions with our radar maps. Switch between radar,
              high-resolution satellite, and rainfall, temperature and other maps for real-time
              tracking data.
            </p>
            <p>
              🌦 <b>Weather Forecasting</b>
              <br/>
              We support live weather forecasts for global locations and provide detailed 7 to 15-day
              weather information. Get insights on rainfall forecasts, &#39;feels like&#39;
              temperatures, air quality index (AQI), UV index, humidity, visibility, wind direction,
              wind speed, and pressure changes.
            </p>
            <p>
              🏞 <b>Hourly Activity Forecast</b>
              <br/>
              Planning an outdoor adventure? Our app&#39;s unique Indices feature provides weather
              suitability for popular outdoor activities like hiking, running, camping, kayaking,
              fishing, and hunting for the next 48 hours. Make the most of your outdoor pursuits with
              our easy to use weather insights.
            </p>
            <p>
              📱 <b>Customizable Widgets</b>
              <br/>
              Enhance your home screen with our customizable widgets. Get weather updates right on
              your home screen with our beautiful weather &amp; clock widgets. Choose from a variety
              of styles and sizes to match your aesthetic.
            </p>
            <p>
              🌙 <b>Sun &amp; Moon Tracker</b>
              <br/>
              Stay in sync with nature with our dynamic display of sunrise and sunset times.
            </p>
          </div>
        </Card>
        <Divider style={{borderColor: 'blue'}} orientation="center">
          Please answer your perception in the following privacy scenarios: Do you feel comfortable for this?
        </Divider>
        <DynamicQuestionList currentUser={currentUser} />

      </>
    );
  };

export default App3;
