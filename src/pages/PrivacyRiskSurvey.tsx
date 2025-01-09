import React from "react";
import { Form, Input, Select, Checkbox, Radio, Button } from "antd";

const { Option } = Select;

const PrivacyRiskSurvey = () => {
  const onFinish = (values: Record<string, any>) => {
    console.log("Survey Submitted:", values);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Survey Design Framework</h1>

      <Form onFinish={onFinish} layout="vertical">
        {/* 1. Background Information */}
        <h2>1. Background Information</h2>

        <Form.Item name="age" label="Age">
          <Input type="number" placeholder="Enter your age" />
        </Form.Item>

        <Form.Item name="gender" label="Gender">
          <Select placeholder="Select your gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item name="education" label="Education Level">
          <Select placeholder="Select your education level">
            <Option value="primary">Primary School</Option>
            <Option value="middle">Middle School</Option>
            <Option value="high">High School</Option>
            <Option value="college">College or Higher</Option>
          </Select>
        </Form.Item>

        <Form.Item name="techBackground" label="Are you familiar with mobile app permission management?">
          <Radio.Group>
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="appUsage" label="Daily time spent using mobile apps">
          <Input type="text" placeholder="e.g., 2 hours" />
        </Form.Item>

        <Form.Item name="appType" label="Types of apps you frequently use">
          <Checkbox.Group>
            <Checkbox value="social">Social</Checkbox>
            <Checkbox value="shopping">Shopping</Checkbox>
            <Checkbox value="navigation">Navigation</Checkbox>
            <Checkbox value="health">Health</Checkbox>
          </Checkbox.Group>
        </Form.Item>

        {/* 2. Specific Question Modules */}
        <h2>2. Specific Question Modules</h2>
        <h3>A. Sensitivity of Data Types</h3>
        <Form.Item name="sensitiveData" label="Which of the following user data types do you consider sensitive?">
          <Checkbox.Group>
            <Checkbox value="name">Name and Contact Information</Checkbox>
            <Checkbox value="location">Geographic Location</Checkbox>
            <Checkbox value="call">Call Records</Checkbox>
            <Checkbox value="appUsage">App Usage Records</Checkbox>
            <Checkbox value="bio">Biometric Data</Checkbox>
            <Checkbox value="health">Health Data</Checkbox>
            <Checkbox value="bank">Bank Transaction Data</Checkbox>
          </Checkbox.Group>
        </Form.Item>

        <h3>B. Awareness of Privacy Rights</h3>
        <Form.Item name="privacyPolicy" label="Do you carefully read privacy policies when installing apps?">
          <Radio.Group>
            <Radio value="often">Often</Radio>
            <Radio value="sometimes">Sometimes</Radio>
            <Radio value="rarely">Rarely</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="permissionFamiliarity" label="How familiar are you with setting app permissions?">
          <Radio.Group>
            <Radio value="very">Very Familiar</Radio>
            <Radio value="average">Somewhat Familiar</Radio>
            <Radio value="not">Not Familiar</Radio>
          </Radio.Group>
        </Form.Item>

        <h3>C. App Behavior Choices</h3>
        <Form.Item name="appActions" label="If you discover an app might leak privacy data, what actions would you take?">
          <Checkbox.Group>
            <Checkbox value="stop">Stop using the app</Checkbox>
            <Checkbox value="replace">Look for alternative apps</Checkbox>
            <Checkbox value="restrict">Continue using but restrict permissions</Checkbox>
            <Checkbox value="report">Contact the developer or relevant authorities</Checkbox>
          </Checkbox.Group>
        </Form.Item>
        {/* 3. Risk Attitude Test */}
        <h2>3. Risk Attitude Test</h2>

        <h3>Scenario 1: Privacy Sharing in Social Apps</h3>
        <Form.Item name="socialApp" label="A social app requests access to your contact list:">
          <Radio.Group>
            <Radio value="accept">A. Allow access, gain friend recommendations, with 10% privacy risk</Radio>
            <Radio value="decline">B. Decline access, no recommendations, no privacy risk</Radio>
          </Radio.Group>
        </Form.Item>

        <h3>Scenario 2: Transaction Record Analysis in Finance Apps</h3>
        <Form.Item name="financeApp" label="A finance app requests access to your transaction records:">
          <Radio.Group>
            <Radio value="accept">A. Allow access, 90% chance of lower loan rates, 1% privacy risk</Radio>
            <Radio value="decline">B. Decline access, no risk, no loan benefits</Radio>
          </Radio.Group>
        </Form.Item>

        <h3>Scenario 3: Data Sharing in Shopping Apps</h3>
        <Form.Item name="shoppingApp" label="A shopping app requests your shopping history:">
          <Radio.Group>
            <Radio value="accept">A. Allow sharing, 5% chance to win $500, 20% risk of ads</Radio>
            <Radio value="decline">B. Decline sharing, no ads, no rewards</Radio>
          </Radio.Group>
        </Form.Item>

        <h3>Scenario 4: Privacy Authorization in Health Apps</h3>
        <Form.Item name="healthApp" label="A health app requests your health data:">
          <Radio.Group>
            <Radio value="accept">A. Share data, 80% chance of better health suggestions, 10% risk of misuse</Radio>
            <Radio value="decline">B. Decline sharing, no suggestions, no risk</Radio>
          </Radio.Group>
        </Form.Item>

        <h2>4. User Preferences and Attitudes</h2>
        <Form.Item name="appPreference" label="Which type of app do you prefer?">
          <Radio.Group>
            <Radio value="free">Free apps with extensive permissions</Radio>
            <Radio value="paid">Paid apps without personal data collection</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="privacyOpinion" label="What are your thoughts on privacy protection?">
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
  );
};

export default PrivacyRiskSurvey;
