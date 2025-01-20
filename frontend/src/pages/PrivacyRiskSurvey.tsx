import { Button, Card, Checkbox, Col, Form, Input, message, Radio, Row, Select } from 'antd';
import { useEffect, useState } from 'react';

const { Option } = Select;

const PrivacyRiskSurvey = () => {
  const [currentUser, setCurrentUser] = useState<any>({ username: '' });
  const [, setUserSurveyState] = useState<any>({ status: '', type: '' });

  // 模拟获取当前用户（实际项目中可以从上下文、redux或API中获取）
  useEffect(() => {
    const fetchCurrentUser = async () => {
      const response = await fetch('/api/current_user', { method: 'GET' });
      if (response.ok) {
        const data = await response.json();
        setCurrentUser({ username: data.username });
      } else {
        message.error('无法获取当前用户信息');
      }
    };

    fetchCurrentUser();
  }, []);

  // 提交调查问卷的方法
  const onFinish = async (values: Record<string, any>) => {
    try {
      // 检查表单字段是否有空值
      if (Object.values(values).includes('') || Object.values(values).includes(undefined)) {
        message.error('请填写所有必填项');
        return;
      }

      // 将当前用户的用户名添加到提交的数据中
      const surveyData = { ...values, username: currentUser.username };

      // 调用后端接口提交调查问卷数据
      const msg = await submitSurvey(surveyData); // 这是我们调用的后端提交接口
      if (msg.status === 'ok') {
        // 成功提示
        const successMessage = '调查问卷提交成功！';
        message.success(successMessage);
        setUserSurveyState({ status: 'ok', type: 'survey' });
      } else {
        console.log(msg);
        // 如果失败，展示错误信息并更新状态
        setUserSurveyState(msg);
        message.error('提交失败，请稍后再试');
      }
    } catch (error) {
      console.log(error);
      message.error('提交调查问卷时发生错误');
    }
  };

  // 模拟的提交调查问卷到后端的函数（替换成实际的请求）
  const submitSurvey = async (data: any) => {
    // 实际的请求可以通过 fetch 或 axios 发出
    try {
      const response = await fetch('http://47.253.156.187:8000/api/submit_survey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // 传递的数据
      });

      if (response.ok) {
        return { status: 'ok' }; // 模拟成功响应
      } else {
        const errorData = await response.json();
        return { status: 'error', message: errorData.message }; // 错误返回
      }
    } catch (error) {
      console.error('提交调查问卷时出错:', error);
      return { status: 'error', message: '服务器错误' };
    }
  };

  return (
    <Card
      style={{
        borderRadius: 8,
      }}
      // bodyStyle={{
      //   backgroundImage:
      //     initialState?.settings?.navTheme === 'realDark'
      //       ? 'background-image: linear-gradient(75deg, #1A1B1F 0%, #191C1F 100%)'
      //       : 'background-image: linear-gradient(75deg, #FBFDFF 0%, #F5F7FF 100%)',
      // }}
    >
      <div style={{ padding: '20px' }}>
        <h1>Survey on Risk Preference</h1>

        <Form onFinish={onFinish} layout="vertical">
          {/* 1. Background Information */}
          <h2>1. Background Information</h2>
          <Form.Item
                name="prolific"
                label="Prolific ID"
                rules={[{ required: true, message: 'Please enter your Prolific ID' }]}
              >
                <Input type="text" placeholder="Enter your Prolific ID" />
              </Form.Item>

          {/* <Row gutter={36}>
            <Col span={8}>
              <Form.Item
                name="age"
                label="Age"
                rules={[{ required: true, message: 'Please enter your age' }]}
              >
                <Input type="number" placeholder="Enter your age" />
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item
                name="gender"
                label="Gender"
                rules={[{ required: true, message: 'Please select your gender' }]}
              >
                <Select placeholder="Select your gender">
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                  <Option value="other">Other</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item
                name="education"
                label="Education Level"
                rules={[{ required: true, message: 'Please select your education level' }]}
              >
                <Select placeholder="Select your education level">
                  <Option value="primary">Primary School</Option>
                  <Option value="middle">Middle School</Option>
                  <Option value="high">High School</Option>
                  <Option value="college">College or Higher</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row> */}

          <Row gutter={36}>
            <Col span={12}>
              <Form.Item
                name="techBackground"
                label="Are you familiar with mobile app permission management?"
                rules={[{ required: true, message: 'Please answer this question' }]}
              >
                <Radio.Group>
                  <Radio value="yes">Yes</Radio>
                  <Radio value="no">No</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                name="appUsage"
                label="Daily time spent using mobile apps"
                rules={[{ required: true, message: 'Please enter the time you spend using apps' }]}
              >
                <Input type="text" placeholder="e.g., 2 hours" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name="appType"
            label="Types of apps you frequently use"
            rules={[{ required: true, message: 'Please select at least one app type' }]}
          >
            <Checkbox.Group>
              <Checkbox value="Social">Social</Checkbox>
              <Checkbox value="Shopping">Shopping</Checkbox>
              <Checkbox value="Weather">Weather</Checkbox>
              <Checkbox value="Business">Business</Checkbox>
              <Checkbox value="Education">Education</Checkbox>
              <Checkbox value="Maps and Navigation">Maps and Navigation</Checkbox>
              <Checkbox value="Music and Audio">Music and Audio</Checkbox>
              <Checkbox value="Health and Fitness">Health and Fitness</Checkbox>
              <Checkbox value="Others">Others</Checkbox>
            </Checkbox.Group>
          </Form.Item>

          {/* 2. Specific Question Modules */}
          <h2>2. Mobile Privacy Preferences</h2>
          <h3>A. Sensitivity of Data Types</h3>
          <Form.Item
            name="sensitiveData"
            label="Which of the following user data types do you consider sensitive?"
            rules={[{ required: true, message: 'Please select at least one sensitive data type' }]}
          >
            <Checkbox.Group>
              <Checkbox value="name">Name and Contact Information</Checkbox>
              <Checkbox value="location">Geographic Location</Checkbox>
              <Checkbox value="call">Call Records</Checkbox>
              <Checkbox value="appUsage">App Usage Records</Checkbox>
              <Checkbox value="bio">Biometric Data</Checkbox>
              <Checkbox value="health">Health Data</Checkbox>
              <Checkbox value="bank">Bank Transaction Data</Checkbox>
              <Checkbox value="photo">Photos</Checkbox>
            </Checkbox.Group>

            <Form.Item
              name="sensitiveDataOther"
              label="Other sensitive data types (if any):"
              style={{ marginTop: '10px', marginBottom: '0' }}
            >
              <Input placeholder="Please specify other sensitive data types..." />
            </Form.Item>
          </Form.Item>

          <h3>B. Awareness of Privacy Rights</h3>
          <Form.Item
            name="privacyPolicy"
            label="Do you carefully read privacy policies when installing apps?"
            rules={[{ required: true, message: 'Please answer this question' }]}
          >
            <Radio.Group>
              <Radio value="often">Often</Radio>
              <Radio value="sometimes">Sometimes</Radio>
              <Radio value="rarely">Rarely</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="permissionFamiliarity"
            label="How familiar are you with setting app permissions?"
            rules={[{ required: true, message: 'Please answer this question' }]}
          >
            <Radio.Group>
              <Radio value="very">Very Familiar</Radio>
              <Radio value="average">Somewhat Familiar</Radio>
              <Radio value="not">Not Familiar</Radio>
            </Radio.Group>
          </Form.Item>

          <h3>C. App Behavior Choices</h3>
          <Form.Item
            name="appActions"
            label="If you discover an app might leak privacy data, what actions would you take?"
            rules={[{ required: true, message: 'Please select at least one action' }]}
          >
            <Checkbox.Group>
              <Checkbox value="stop">Stop using the app</Checkbox>
              <Checkbox value="replace">Look for alternative apps</Checkbox>
              <Checkbox value="restrict">Continue using but restrict permissions</Checkbox>
              <Checkbox value="report">Contact the developer or relevant authorities</Checkbox>
            </Checkbox.Group>

            <Form.Item
              name="appActionsOther"
              label="Other actions you might take (if any):"
              style={{ marginTop: '10px', marginBottom: '0' }}
            >
              <Input placeholder="Please specify other actions..." />
            </Form.Item>
          </Form.Item>

          {/* 3. Risk Attitude Test */}
          <h2>3. Risk Attitude Test</h2>

          <p>
            You are using a mobile payment app. The app collects your private data (e.g., location,
            purchase records) to provide personalized services, which may affect your monetary gains
            or losses in certain scenarios. Below are specific situations; please select your
            preferred option for each.
          </p>

          <Form.Item
            name="highProbabilityGain"
            label="If you allow the app to collect your personal data (e.g., location and purchase records):"
            rules={[{ required: true, message: 'Please select an option' }]}
          >
            <Radio.Group>
              <Radio value="A">A. Get $90 cashback guaranteed</Radio>
              <Radio value="B">B. 90% chance to get $100, 10% chance to get $0</Radio>
              <Radio value="C">C. Do not share location data, no cashback</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="lowProbabilityGain"
            label="If you allow the app to collect your personal data (e.g., location and purchase records):"
            rules={[{ required: true, message: 'Please select an option' }]}
          >
            <Radio.Group>
              <Radio value="A">A. Guaranteed $5 cashback</Radio>
              <Radio value="B">B. 5% chance of $100, 95% chance of $0</Radio>
              <Radio value="C">C. Do not share purchase data, no cashback</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="highProbabilityLoss"
            label="If you allow the app to collect your private data (e.g., location and purchase records), your private data might be used by advertisers:"
            rules={[{ required: true, message: 'Please select an option' }]}
          >
            <Radio.Group>
              <Radio value="A">A. Tolerate some data leakage with ads</Radio>
              <Radio value="B">
                B. 90% chance of data leakage with ads, 10% chance of no impact
              </Radio>
              <Radio value="C">C. Do not allow data collection, stop using the app</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="lowProbabilityLoss"
            label="If you allow the app to collect your private data (e.g., location and purchase records), your private data might be used by advertisers:"
            rules={[{ required: true, message: 'Please select an option' }]}
          >
            <Radio.Group>
              <Radio value="A">A. Tolerate a little data leakage with ads</Radio>
              <Radio value="B">
                B. 5% chance of data leakage with ads, 95% chance of no impact
              </Radio>
              <Radio value="C">C. Do not allow data collection, stop using the app</Radio>
            </Radio.Group>
          </Form.Item>

          <h2>4. User Preferences and Attitudes</h2>
          <Form.Item
            name="appPreference"
            label="Which type of app do you prefer?"
            rules={[{ required: true, message: 'Please select an option' }]}
          >
            <Radio.Group>
              <Radio value="free">Free apps with extensive permissions</Radio>
              <Radio value="paid">Paid apps without personal data collection</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item name="privacyOpinion" label="What are your thoughts on mobile privacy protection?">
            <Input.TextArea placeholder="e.g., How do you balance privacy protection and convenience?" />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit Survey
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Card>
  );
};

export default PrivacyRiskSurvey;
