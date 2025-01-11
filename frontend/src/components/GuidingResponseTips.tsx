import { Alert } from 'antd';

const GuidingResponseTips = () => (
  <Alert
    message="Please read the above app description and answer the following questions:"
    description={
      <p style={{ margin: '0 0 4px', fontSize: '14px', lineHeight: '1.5', color: '#555' }}>
        What's your perception of the data access behavior? Indicate your <strong style={{ color: '#fa541c' }}>level of comfort</strong> based on the
        app's described behavior for each scenario.
      </p>
    }
    type="info"
    showIcon
    style={{
      marginBottom: '16px',
      marginTop: '16px',
      borderRadius: '8px',
    }}
  />
);
export default GuidingResponseTips;
