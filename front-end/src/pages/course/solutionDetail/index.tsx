import React, {FC} from "react";
import ReactMarkdown from "react-markdown";
import {Avatar, List} from "antd";
import gfm from 'remark-gfm'
import {ProCard} from "@ant-design/pro-components";

const data = Array.from({ length: 23 }).map((_, i) => ({
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

  const md = '# Hello world! \n **it is cold**\n 项目路径： `202.120.40.114:22 /home/LiZong/Tuningfork/` (本机：basic-server);' +
    '$x = 1 + 2$';

  return (
    <div style={{ height: document.body.clientHeight - 172, overflow: 'auto' }}>
      <div>
        <List.Item.Meta
         avatar={<Avatar src={'https://joeschmoe.io/api/v1/random'}/>}
         title={<p>super super {props.solutionId}</p>}
         ></List.Item.Meta>
      </div>
      <div>
        <ProCard type={"inner"} style={{background: '#F7F7F7', borderRadius: 5}} bordered>
          <ReactMarkdown  remarkPlugins={[gfm]}>{md}</ReactMarkdown>
        </ProCard>

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
                avatar={<Avatar src={item.avatar} />}
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
