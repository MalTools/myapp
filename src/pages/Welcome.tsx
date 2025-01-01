import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Card, theme, Typography } from 'antd';
import React from 'react';
const { Title, Paragraph, Text} = Typography;

/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */
const InfoCard: React.FC<{
  title: string;
  index: number;
  desc: React.ReactNode;
}> = ({ title, index, desc }) => {
  const { useToken } = theme;

  const { token } = useToken();

  return (
    <div
      style={{
        backgroundColor: token.colorBgContainer,
        boxShadow: token.boxShadow,
        borderRadius: '8px',
        fontSize: '14px',
        // color: token.colorTextSecondary,
        lineHeight: '22px',
        padding: '16px 19px',
        minWidth: '220px',
        flex: 1,
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '4px',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            lineHeight: '22px',
            backgroundSize: '100%',
            textAlign: 'center',
            padding: '8px 16px 16px 12px',
            color: '#FFF',
            fontWeight: 'bold',
            backgroundImage:
              "url('https://gw.alipayobjects.com/zos/bmw-prod/daaf8d50-8e6d-4251-905d-676a24ddfa12.svg')",
          }}
        >
          {index}
        </div>
        <div
          style={{
            fontSize: '16px',
            color: token.colorText,
            paddingBottom: 8,
          }}
        >
          <Title level={4}>{title}</Title>
        </div>
      </div>
      <div
        style={{
          // fontSize: '16px',
          // color: token.colorTextSecondary,
          textAlign: 'justify',
          lineHeight: '22px',
          marginBottom: 8,
          marginLeft: 18,
          marginRight: 18,
        }}
      >
        {desc}
      </div>
      {/* <a href={href} target="_blank" rel="noreferrer">
        了解更多 {'>'}
      </a> */}
    </div>
  );
};

const Welcome: React.FC = () => {
  const { token } = theme.useToken();
  const { initialState } = useModel('@@initialState');
  return (
    <PageContainer>
      <Card
        style={{
          borderRadius: 8,
        }}
        bodyStyle={{
          backgroundImage:
            initialState?.settings?.navTheme === 'realDark'
              ? 'background-image: linear-gradient(75deg, #1A1B1F 0%, #191C1F 100%)'
              : 'background-image: linear-gradient(75deg, #FBFDFF 0%, #F5F7FF 100%)',
        }}
      >
        <div
          style={{
            backgroundPosition: '100% -30%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '274px auto',
            backgroundImage:
              "url('https://gw.alipayobjects.com/mdn/rms_a9745b/afts/img/A*BuFmQqsB2iAAAAAAAAAAAAAAARQnAQ')",
          }}
        >
          <Title level={3}>Welcome to the Democratizing Mobile Privacy Insights Platform !</Title>

          <Paragraph
            style={{
              fontSize: '16px',
            }}
          >
            Hi! We are delighted to have you join us in reshaping how privacy practices are assessed
            and understood! <br></br>This platform is designed to empower users like you to voice
            your opinions on app privacy practices, helping create a more transparent and
            user-centered digital environment.
          </Paragraph>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              padding: 8,
              gap: 16,
            }}
          >
            <InfoCard
              index={1}
              title="What We Do"
              desc={
                <Text>
                  Our mission is to evaluate and improve app privacy practices through a
                  crowdsourced approach. By gathering feedback from users across diverse
                  backgrounds, we aim to provide developers and regulators with valuable insights
                  into how privacy practices align—or fail to align—with user expectations.
                </Text>
              }
            />
            <InfoCard
              index={2}
              title="What You’ll Do"
              desc={
                <>
                  <Paragraph>As a participant, your role is simple but impactful:</Paragraph>
                  <Paragraph>
                    1. <Text strong>Review Scenarios:</Text> You’ll be presented with scenarios of
                    an app's sensitive data access behavior, as well as information about the app's
                    functionalities and purposes.
                  </Paragraph>
                  <Paragraph>
                    2. <Text strong>Answer Questions:</Text> For each scenario, you’ll respond to
                    assess your comfort level with the app’s data access practices under specific
                    scenario. We use a Likert-scale ratings to capture your opinions
                    comprehensively.
                  </Paragraph>
                </>
              }
            />
            <InfoCard
              index={3}
              title="Why It Matters"
              desc={
                <>
                  <Paragraph>Your feedback helps us:</Paragraph>
                  <Paragraph>
                    <ul style={{ listStyleType: 'disc' }}>
                      <li>
                        Provide developers with user-driven insights to refine their privacy
                        practices.
                      </li>
                      <li>
                        Offer regulators a clearer understanding of user privacy expectations.
                      </li>
                      <li>
                        Empower other users with information that fosters informed decision-making
                        about app usage.
                      </li>
                    </ul>
                  </Paragraph>
                </>
              }
            />
          </div>
          <br></br>
          <Title level={3}>Thank You for Joining Us!</Title>
          <Paragraph style={{
              fontSize: '16px',
            }}>
            Participating is straightforward, and you can share your thoughts at your own pace. Your
            contributions are anonymous and confidential, ensuring your privacy while enabling us to
            gather meaningful data.
          </Paragraph>
          <Paragraph style={{
              fontSize: '16px',
            }}>
            By participating, you are helping to create a safer, more privacy-conscious app
            ecosystem. Let’s work together to make a difference in how privacy is understood,
            respected, and implemented!
          </Paragraph>
          <Paragraph
            style={{
              fontSize: '16px',
            }}
          >
            Click on each category in the <Text strong>Left Navigation Bar</Text> to begin your
            review and share your valuable insights!
          </Paragraph>
        </div>
      </Card>
    </PageContainer>
  );
};

export default Welcome;
