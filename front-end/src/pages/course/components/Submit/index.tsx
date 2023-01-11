import { Button, Form, Input, Select } from 'antd';
import type { SelectProps } from 'antd';
import { useModel } from 'umi';
import { request } from 'umi';

// const options: SelectProps<string>['options'] = [];

// for (let i = 0; i < 10; i++) {
//   options.push({ label: `章节${i}`, value: `Chapter${i}` });
// }
const handleChange = (value: string[]) => {
  console.log(`selected ${value}`);
};

type IProps = {
  flag: number;
};

const SummitComponent: React.FC<IProps> = (props: IProps) => {
  const [form] = Form.useForm();
  const { labels, setLabels } = useModel('CourseLabels');

  console.log('labels_new', labels);

  // const mylabels = labels.map((item) => {
  //   return { label: item.labelName, value: item.id };
  // });
  const addProblems = (value) => {
    request('/api/addProblems/', {
      method: 'post',
      data: value,
    });
  };
  const onFinish = (values: any) => {
    console.log('onFinishValues', values);
    addProblems(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const labelOptions = labels.map((label) => {
    return { label: label.labelName, value: label.id };
  });
  return (
    <Form
      name="problem-summit"
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="题目"
        name="title"
        rules={[{ required: true, message: '请输入题目' }]}
        wrapperCol={{ span: 16, offset: 0 }}
      >
        <Input />
      </Form.Item>
      {props.flag && (
        <Form.Item
          label="标签"
          name="tags"
          rules={[{ required: true, message: '请选择至少一个标签' }]}
          hidden={false}
        >
          <Select
            mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder="请选择"
            options={labelOptions}
            onChange={handleChange}
          />
        </Form.Item>
      )}
      <Form.Item
        label="描述"
        name="description"
        rules={[{ required: true, message: '请输入题目描述' }]}
        wrapperCol={{ span: 16, offset: 0 }}
      >
        <Input.TextArea
          style={{ height: 300 }}
          placeholder="请输入题目描述，支持Markdown和LaTex格式"
        />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};
export default SummitComponent;
