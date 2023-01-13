import {FC} from "react";
import ReactMarkdown from "react-markdown";
import {Avatar, Button, Form, Input, List, Select} from "antd";
import gfm from 'remark-gfm'
import 'katex/dist/katex.min.css';
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import {ProCard} from "@ant-design/pro-components";
import {useLocation} from "umi";




const data = Array.from({length: 23}).map((_, i) => ({
  href: 'https://ant.design',
  title: `ant design part ${i}`,
  avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
  description:
    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  content:
    '这篇题解从思路梳理到用词推敲，是我最满意的一篇。因为它收到一个赞我就再读一遍，再改一改，改了有几十遍……希望你读的时候，它是很流畅的样子。',
}));

interface IProps {
  solutionId: number;
}

/**
 * 题解详情组件
 * @param props
 * @constructor
 */
const SolutionDetail: FC<IProps> = (props) => {


  const md = `# 题意解释：
  - 一共有 n 门课要上，编号为 0 ~ n-1。\n
  - 先决条件[1, 0]，意思是必须先上课 0，才能上课 1。\n
  - 给你 n 、和一个先决条件表，请你判断能否完成所有课程。\n
  `

  const location = useLocation()
  const sid = location?.state?.solutionId

  const solutionId = sid? sid : props.solutionId

  return (
    <div style={{height: document.body.clientHeight - 160, overflow: 'auto'}}>
      <div>
        <List.Item.Meta
          avatar={<Avatar src={'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png'}/>}
          title={<p>滑动窗口</p>}
          description={'user'}
        ></List.Item.Meta>
      </div>
      <div>
        <ProCard type={"inner"} style={{background: '#F7F7F7', borderRadius: 5}} bordered>
          {/*题解内容展示*/}
          <ReactMarkdown remarkPlugins={[gfm, remarkMath]} rehypePlugins={[rehypeKatex]}>{md}</ReactMarkdown>
        </ProCard>

        <br/>
        <br/>
        <br/>
        {/*评论展示*/}
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 7,
          }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item
              key={item.title}
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar}/>}
                title={<a href={item.href}>{item.title}</a>}
              />
              {item.content}
            </List.Item>
          )}
        />

        <Form
          name="addComment"
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="内容"
            name="content"
            // rules={[{ required: true, message: '请输入题目描述' }]}
            wrapperCol={{ span: 16, offset: 0 }}
          >
            <Input.TextArea style={{height: 300}} />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              发布
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>


  )
}


export default SolutionDetail;
