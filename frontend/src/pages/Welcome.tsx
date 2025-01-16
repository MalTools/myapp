import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Card, Image, theme, Typography } from 'antd';
import React from 'react';
const { Title, Paragraph, Text } = Typography;

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
    // <PageContainer>
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
          and understood! This platform is designed to empower users like you to voice your opinions
          on app privacy practices, helping create a more transparent and user-centered digital
          environment.
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
                Our mission is to democratize app privacy assessments by empowering users to share
                their perspectives on how apps handle personal data. Through this collaborative
                approach, we aim to bridge the gap between user expectations and privacy practices.
                By creating a platform that values diverse voices, we strive to set a new standard
                for accountability and user-centric privacy in the app ecosystem.
              </Text>
            }
          />
          <InfoCard
            index={2}
            title="What You’ll Do"
            desc={
              <>
                {/* <Paragraph>As a participant, your role is simple but impactful:</Paragraph> */}
                <Paragraph>
                  1. <Text strong>Review Scenarios:</Text> You’ll be presented with scenarios of an
                  app's sensitive data access behavior, as well as information about the app's
                  functionalities and purposes.
                  <br></br>
                  2. <Text strong>Answer Questions:</Text> For each scenario, you’ll respond to
                  assess your comfort level with the perceived necessity of data access. We use a
                  Likert-scale ratings and open-ended fields to capture your opinions
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
                <Paragraph>Your feedback has a tangible impact:</Paragraph>
                <Paragraph>
                  <ul style={{ listStyleType: 'disc' }}>
                    <li>
                      For Developers: Provide developers with user-driven insights to refine their
                      privacy practices.
                    </li>
                    <li>
                      For Regulators: Offer regulators a clearer understanding of user privacy
                      expectations.
                    </li>
                    <li>
                      For Users: Empower other users with information that fosters informed
                      decision-making about app usage.
                    </li>
                  </ul>
                </Paragraph>
              </>
            }
          />
        </div>

        <Typography style={{ marginTop: '24px' }}>
          <Title level={3}>How to Answer the Questions</Title>

          {/* 页面内容安排 */}
          <Paragraph>
            Each app category is organized into a single evaluation page. Use the left navigation
            panel to select a category. At the top of the page, you'll find a set of keywords
            describing the features and functionalities of that app category (see the example
            below). Each category contains several representative apps, <br></br>shown as tabs (for
            example, App 1, App 2, App 3).
          </Paragraph>

          {/* 添加示例页面截图 */}
          <div style={{ textAlign: 'center', marginBottom: '16px' }}>
            <Image
              width="90%" // 图片宽度
              src="/images/Weather/screenshot.jpg" // 替换为实际图片路径
              alt="Example of App Category Page"
            />
          </div>

          <Title level={4}>YOUR TASK is:</Title>
          <Paragraph>
            <Text strong style={{ color: '#fa541c' }}>
              1. Explore the Tabs:
            </Text>{' '}
            Each app tab provides:
          </Paragraph>
          <ul>
            <li>
              A description of the app with screenshot images, outlining its main features and
              services.
            </li>
            <li>
              Questions designed to understand your perceptions of the app’s privacy behaviors.
            </li>
          </ul>

          <Paragraph>
            <Text strong style={{ color: '#fa541c' }}>
              2. Complete the Questions:
            </Text>{' '}
            Please <strong>answer all the questions for each app tab in the category</strong>.
            Completing all tabs means you’ve finished evaluating that category.
            <ul>
              <li>
                <strong>Goal:</strong> Evaluate{' '}
                <Text strong style={{ color: 'blue' }}>
                  at least 3 categories
                </Text>{' '}
                from the left navigation panel.
              </li>
            </ul>
          </Paragraph>

          {/* 每个问题的说明 */}
          <Paragraph>
            <Text strong style={{ color: '#fa541c' }}>
              3. Rate Each Scenario:
            </Text>{' '}
            For each question, you’ll review a specific scenario where the app accesses certain data
            (e.g., location or microphone) for a stated purpose. Use the following scale to rate
            your comfort level:
          </Paragraph>
          <ul>
            <li>
              <FrownOutlined style={{ color: 'red', marginRight: 6 }} />
              <Text strong>Uncomfortable:</Text> You feel opposed to the described behavior.
            </li>
            <li>
              <MehOutlined style={{ color: 'orange', marginRight: 6 }} />
              <Text strong>So-so:</Text> You feel neutral or have minor concerns about the described
              behavior.
            </li>
            <li>
              <SmileOutlined style={{ color: 'green', marginRight: 6 }} />
              <Text strong>Comfortable:</Text> You feel completely fine with the described behavior.
            </li>
            <li>
              <Text strong>Need more information:</Text> You cannot make a decision without
              additional details.
            </li>
          </ul>

          <Paragraph>
            <Text strong style={{ color: '#fa541c' }}>
              4. Complete the Follow-Up Survey:
            </Text>{' '}
            Please don't forget to proceed to the <strong>Survey</strong> section in the left navigation panel.
            This survey gathers additional insights into your preferences, behaviors, and attitudes
            related to mobile app privacy and data sharing. Thank you!
          </Paragraph>

          {/* 鼓励用户参与 */}
          <Title level={5}>Important Notes:</Title>
          <ul>
            <li>
              There is <strong>NO RIGHT or WRONG answer.</strong> Please respond based on your
              personal feelings and perspectives. 
            </li>
            <li>
              Your feedback is <strong>anonymous</strong> and critical to improving app privacy
              practices across the ecosystem.
            </li>
          </ul>
        </Typography>

        {/* 感谢内容 */}
        <Typography style={{ marginTop: '24px' }}>
          <Title level={3}>Thank You for Joining Us!</Title>
          <Paragraph>
            Participating is simple and anonymous, and you can share your thoughts at your own pace.
            {/* By contributing, you are helping to shape a safer, more privacy-conscious app ecosystem.
            Together, let’s work to ensure that user privacy is better understood, respected, and
            implemented! */}
          </Paragraph>
        </Typography>

        <Paragraph
          style={{
            fontSize: '16px',
          }}
        >
          Click on each category in the <Text strong>Left Navigation Panel</Text> to begin your
          review and share your valuable insights!
        </Paragraph>
      </div>
    </Card>
    // </PageContainer>
  );
};

export default Welcome;
