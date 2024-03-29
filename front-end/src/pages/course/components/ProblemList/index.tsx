import { EllipsisOutlined, PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable, TableDropdown } from '@ant-design/pro-components';
import { getLabelProblemsRead } from '@/services/ant-design-pro/getLabelProblems';
import { Button, Dropdown, Space, Tag } from 'antd';
import { Link } from 'umi';
import { useRequest } from '@@/plugin-request/request';
import { useModel } from 'umi';
import { request } from 'umi';

const label_color_map = new Map();

type IProps = {
  labelId: number;
};

type ProblemItem = {
  id: number;
  problemName: string;
  createdAt: number;
  changedAt: number;
  mark: Map<string, { id: number; text: string; status: string; color: string }>;
};

const TableList: React.FC<IProps> = (props: IProps) => {
  const getLabelProblems = async (id: number) => {
    const data = await request(`/api/getLabelProblems/${id}/`, {
      method: 'get',
    });
    console.log('getLabelProblems', data);

    return data;
  };
  const { labels, setLabels } = useModel('CourseLabels');
  const { data, error, loading } = useRequest(() => {
    return getLabelProblems(props.labelId);
  });

  if (error) {
    return <div>Error info</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  console.log('labels', labels);

  for (let i = 0; i < labels.length; i++) {
    label_color_map.set(labels[i].labelName, {
      id: i,
      text: labels[i].labelName,
      status: 'error',
      color: 'red',
    });
  }

  const columns: ProColumns<ProblemItem>[] = [
    {
      dataIndex: 'index',
      valueType: 'indexBorder',
      width: 48,
    },
    {
      title: '题目',
      dataIndex: 'problemName',
      copyable: true,
      ellipsis: true,
      tip: 'Title is too long will be hidden automatically',
      formItemProps: {
        rules: [
          {
            required: true,
            message: 'This field is required',
          },
        ],
      },
      render: (dom, record: ProblemItem) => {
        return (
          <Link to={{ pathname: `/course/problems/detail`, state: { problemId: record.id } }}>
            {record.problemName}
          </Link>
        );
      },
    },
    {
      title: '标签',
      dataIndex: 'mark',
      ellipsis: true,
      valueType: 'select',
      valueEnum: label_color_map,
      search: false,
      filters: true,
      onFilter: true,

      render: (dom, record: ProblemItem) => {
        return (
          <Space>
            {Array.from(record.mark.values()).map((item) => (
              <Tag color="green" key={item.id}>
                {item.labelName}
              </Tag>
            ))}
          </Space>
        );
      },
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      valueType: 'dateTime',
      sorter: (a: ProblemItem, b: ProblemItem) => a.createdAt - b.createdAt,
      hideInForm: true,
      hideInSearch: true,
      render: (dom, record: ProblemItem) => {
        return <span>{new Date(record.createdAt).toLocaleString()}</span>;
      },
    },
    {
      title: '更新时间',
      dataIndex: 'changedAt',
      valueType: 'dateTime',
      sorter: (a: ProblemItem, b: ProblemItem) => a.changedAt - b.changedAt,
      hideInForm: true,
      hideInSearch: true,
      render: (dom, record: ProblemItem) => {
        return <span>{new Date(record.changedAt).toLocaleString()}</span>;
      },
    },
  ];

  const problemList = data.markProblem;

  // problemList.mark = problemList.mark.map((m: any) => [
  //   m.labelName,
  //   { id: m.id, text: m.labelName, status: 'Error', color: 'green' },
  // ]);

  return (
    <ProTable<ProblemItem>
      columns={columns}
      dataSource={problemList}
      cardBordered
      rowKey="id"
      search={{
        labelWidth: 'auto',
      }}
      options={{
        setting: {
          listHeight: 400,
        },
      }}
      pagination={{
        pageSize: 10,
        onChange: (page, pageSize) => {
          console.log(page, pageSize);
        },
      }}
      dateFormatter="string"
      // headerTitle="Problem Table"
    />
  );
};
export default TableList;
