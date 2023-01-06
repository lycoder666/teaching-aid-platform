import { Button, Spin } from 'antd';
import { ProTable } from '@ant-design/pro-components';
type LabelItem = {
  id: number;
  labelName: string;
};

type SubmitterItem = {
  id: number;
  name: string;
};

type ProblemItem = {
  id: number;
  name: string;
  createdAt: number;
  labels: LabelItem[];
  submitter: SubmitterItem[];
};
const labels = [
  {
    id: 1,
    labelName: '数学',
  },
  {
    id: 2,
    labelName: '语文',
  },
  {
    id: 3,
    labelName: '英语',
  },
  {
    id: 4,
    labelName: '物理',
  },
  {
    id: 5,
    labelName: '化学',
  },
  {
    id: 6,
    labelName: '生物',
  },
  {
    id: 7,
    labelName: '历史',
  },
];
const problemColumns = [
  {
    title: 'ID',
    index: 'id',
    sorter: true,
    search: true,
    tip: 'ID是唯一的',
  },
  {
    title: '名称',
    index: 'name',
    search: true,
    copyable: true,
    elipsis: true,
    tip: '名称过长会自动收缩',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '名称为必填项',
        },
      ],
    },
  },
  {
    title: '标签',
    index: 'labels',
    sorter: true,
    filter: true,
    valueType: 'select',
    valueEnum: {
      1: { text: '数学', status: 'math' },
      2: { text: '语文', status: 'chinese' },
      3: { text: '英语', status: 'english' },
      4: { text: '物理', status: 'physics' },
      5: { text: '化学', status: 'chemistry' },
      6: { text: '生物', status: 'biology' },
      7: { text: '历史', status: 'history' },
      _: { text: '未知', status: 'unknown' },
    },
  },
  {
    title: '创建时间',
    index: 'createdAt',
    sorter: true,
    valueType: 'dateTime',
    render: (_: any, record: ProblemItem) => {
      return <span>{new Date(record.createdAt).toLocaleDateString}</span>;
    },
  },
  {
    title: '提交者',
    index: 'submitter',
    sorter: true,
    filter: true,
  },
  {
    title: '操作',
    valueType: 'option',
    render: (_: any, record: ProblemItem) => [
      <a key="editable">编辑</a>,
      <a key="view">查看</a>,
      <a key="delete">审核</a>,
    ],
  },
];

const ReviewProblem: React.FC = () => {
  return (
    <>
      <ProTable<ProblemItem>
        columns={problemColumns}
        rowKey="id"
        search={{
          labelWidth: 'auto',
        }}
        toolBarRender={() => []}
      />
    </>
  );
};

const Loading = () => {
  return (
    <div className="loading">
      <Spin size="large" />
    </div>
  );
};

export default () => {
  return <ReviewProblem />;
};
