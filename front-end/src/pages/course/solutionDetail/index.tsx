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
  avatar: 'https://joeschmoe.io/api/v1/random',
  description:
    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
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


  const md = `# Hello, world!\n Lift($L$) can be determined by Lift Coefficient ($C_L$) like the equation\n $$\n
              L = \\frac{1}{2} \\rho v^2 S C_L
              \n$$`

  const location = useLocation()
  const sid = location?.state?.solutionId

  const solutionId = sid? sid : props.solutionId

  return (
    <div style={{height: document.body.clientHeight - 160, overflow: 'auto'}}>
      <div>
        <List.Item.Meta
          avatar={<Avatar src={'https://joeschmoe.io/api/v1/random'}/>}
          title={<p>super super {solutionId}</p>}
        ></List.Item.Meta>
      </div>
      <div>
        <ProCard type={"inner"} style={{background: '#F7F7F7', borderRadius: 5}} bordered>
          {/*题解内容展示*/}
          <ReactMarkdown remarkPlugins={[gfm, remarkMath]} rehypePlugins={[rehypeKatex]}>{md}</ReactMarkdown>
        </ProCard>

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
