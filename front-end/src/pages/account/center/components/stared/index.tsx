import React from 'react';
import {StarTwoTone, LikeOutlined, MessageFilled, MessageOutlined} from '@ant-design/icons';
import { useRequest } from 'umi';
import {Avatar, List, Tag} from 'antd';
import type { ListItemDataType } from '../../data.d';
import { queryFakeList } from '../../service';
import styles from './index.less';
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

const Stared: React.FC = () => {

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

  );
};

export default Stared;
