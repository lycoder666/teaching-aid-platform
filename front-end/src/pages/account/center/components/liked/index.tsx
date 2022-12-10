import React, {useState} from 'react';
import {Avatar, List, Space} from "antd";
import {LikeFilled, LikeOutlined, MessageOutlined, StarFilled, StarOutlined} from "@ant-design/icons";
import {useModel} from "@@/plugin-model/useModel";

const data = Array.from({length: 23}).map((_, i) => ({
  solutionId: 1,
  href: 'https://ant.design',
  title: `ant design part ${i}`,
  avatar: 'https://joeschmoe.io/api/v1/random',
  description:
    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), ' +
    'to help people create their product prototypes beautifully and efficiently.',
}));

const Liked: React.FC = () => {

  const {initialState} = useModel('@@initialState')
    return (
      <div>
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 7,
            hideOnSinglePage: true,
            showLessItems: true
          }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item
              // onClick={() => {click(item.solutionId)}}
              key={item.title}

            >
              <List.Item.Meta
                avatar={<Avatar src={'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png'}/>}
                title={<a /*href={item.href}*/>{item.title}</a>}
                description={initialState.currentUser.username}
              />
              {/*<p className={styles.item}>{item.content}</p>*/}
            </List.Item>
          )}
        />
      </div>
    )
}


export default Liked;
