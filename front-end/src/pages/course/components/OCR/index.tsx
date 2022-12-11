import { InboxOutlined } from '@ant-design/icons';
import { Button, Form, Upload } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

const normFile: any = (e: any) => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const OCRComponet: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  return (
    <Form name="OCR result" onFinish={onFinish} wrapperCol={{ span: 12 }}>
      <Form.Item>
        <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
          <Upload.Dragger name="files" action="/upload.do">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              点击或者拖拽上传公式图片
            </p>
            <p className="ant-upload-hint">支持一张或者多张上传</p>
          </Upload.Dragger>
        </Form.Item>
      </Form.Item>

      <Form.Item wrapperCol={{ span: 12, offset: 0 }}>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
      <Form.Item wrapperCol={{ span: 12, offset: 0 }}>
        <TextArea rows={4} placeholder="OCR识别结果在这里展示" />
      </Form.Item>
    </Form>
  );
};

export default OCRComponet;
