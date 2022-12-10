import {FC} from "react";
import ReactMarkdown from "react-markdown";
import {Avatar, List} from "antd";
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
    '标准答案步骤稍多，而且不容易理解，应该左侧指针固定，移动右侧指针，当窗口内最右侧的字符在set中存在时，左侧指针移动并从set中移除原左侧指针对应的字符，这样再取窗口长度的最大值即可',
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


  const md = `# 思路：\n 这道题主要用到思路是：滑动窗口\n 什么是滑动窗口\n 其实就是一个队列.... \n\nLift($L$) can be determined by Lift Coefficient ($C_L$) like the equation\n $$\n
              L = \\frac{1}{2} \\rho v^2 S C_L
              \n$$`

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
      </div>
    </div>


  )
}


export default SolutionDetail;
