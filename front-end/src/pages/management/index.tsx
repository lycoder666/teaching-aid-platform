import { PlusOutlined } from '@ant-design/icons';
import { ProTable, TableDropdown } from '@ant-design/pro-components';
import { Button } from 'antd';
type AccountItem = {
  id: number;
  priority: number;
  name: string;
  createdAt: number;
  lastLoginAt: number;
};

const accountColumns = [
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
    title: '权限',
    index: 'priority',
    sorter: true,
    filter: true,
    valueType: 'select',
    valueEnum: {
      1: { text: '学生', status: 'student' },
      2: { text: '教师', status: 'teacher' },
      3: { text: '管理员', status: 'adminstrator' },
      _: { text: '未知', status: 'unknown' },
    },
  },
  {
    title: '创建时间',
    index: 'createdAt',
    sorter: true,
    valueType: 'dateTime',
    render: (_: any, record: AccountItem) => {
      return <span>{new Date(record.createdAt).toLocaleDateString}</span>;
    },
  },
  {
    title: '最后登录时间',
    index: 'lastLoginAt',
    sorter: true,
    valueType: 'dateTime',
    render: (_: any, record: AccountItem) => {
      return <span>{new Date(record.lastLoginAt).toLocaleDateString}</span>;
    },
  },
  {
    title: '操作',
    valueType: 'option',
    key: 'option',
    render: (text, record, _, action) => [
      <a
        key="editable"
        onClick={() => {
          action?.startEditable?.(record.id);
        }}
      >
        编辑
      </a>,
      <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
        查看
      </a>,
      <TableDropdown
        key="actionGroup"
        onSelect={() => action?.reload()}
        menus={[
          { key: 'copy', name: '复制' },
          { key: 'delete', name: '删除' },
        ]}
      />,
    ],
  },
];

const AccountManagementTable: React.FC = () => {
  return (
    <ProTable<AccountItem>
      columns={accountColumns}
      editable={{
        type: 'multiple',
      }}
      rowKey="id"
      search={{
        labelWidth: 'auto',
      }}
      dateFormatter="string"
      headerTitle="账号管理"
      toolBarRender={() => [
        <Button key="button" icon={<PlusOutlined />} type="primary">
          新建
        </Button>,
      ]}
    />
  );
};

export default () => {
  return <AccountManagementTable />;
};
