import React, {useState} from 'react';
import styles from './index.less';
import Icon, {
  LikeFilled,
  LikeOutlined,
  MessageOutlined,
  StarFilled,
  StarOutlined,
  StarTwoTone
} from '@ant-design/icons';
import {Avatar, List, Space, Tag, theme} from 'antd';
import {FC} from "react";
import {useRequest} from 'umi';
import {ProCard} from "@ant-design/pro-components";
import {useModel} from "@@/plugin-model/useModel";
import SolutionDetail from "@/pages/course/solutionDetail";
import {toNumber} from "lodash";
import {getProblemSolutionsRead} from "@/services/ant-design-pro/getProblemSolutions";
import {getLikes, getStared, getComments} from "@/services/ant-design-pro/get";
import {modifyLikes, modifyStared} from "@/services/ant-design-pro/modify";




type IProps = {
  problemId: number;
}

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

// const chageInfo = (icon: React.FC, soulutionId: number) => {
//     if (icon === LikeOutlined) {
//
//     }else {
//
//     }
// };



//点赞组件
const Like = ({item}: {item: API.SolutionDetail}) => {

  const {initialState} = useModel('@@initialState')
  //获取数据
  const {data} = useRequest<{data: API.Likes}>(
    () =>{
      return getLikes(item.id, initialState.currentUser.token);
    });

  const [count, setCount] = useState(data.likes)
  const [isLiked, setIsLiked] = useState(data.isLiked)

  const ChangeInfo = async () => {

    //修改点赞信息
    setIsLiked(!isLiked)
    /**
     * To do: 向后端发送请求修改点赞信息
     */
    useRequest(() => {
      modifyLikes(initialState.currentUser.token, isLiked);
    })

    setCount(isLiked? count - 1 : count + 1)

  }

  return(<Space onClick={() => {ChangeInfo()}}>
    {isLiked? <LikeFilled/> : <LikeOutlined/>}
    {count}
  </Space>)
}

//收藏组件
const Star = ({item}: {item: API.SolutionDetail}) => {

  const {initialState} = useModel('@@initialState')


  //获取数据
  const {data} = useRequest<{data: API.Stared}>(
    () =>{
      return getStared(item.id, initialState.currentUser.token);
    });

  const [count, setCount] = useState(data.stars)
  const [isStared, setIsStared] = useState(data.isStared)

  const ChangeInfo = async () => {

    //修改点赞信息
    setIsStared(!isStared)
    /**
     * To do: 向后端发送请求修改点赞信息
     */
    useRequest(() => {
      modifyLikes(initialState.currentUser.token, isStared);
    })

    setCount(isStared? count - 1 : count + 1)

  }

  return(<Space onClick={() => {ChangeInfo()}}>
    {isStared? <StarFilled/> : <StarOutlined/>}
    {count}
  </Space>)
}

//评论组件
const Message = ({item}: {item: API.SolutionDetail}) => {

  const {data: count} = useRequest(() =>{
    return getComments(item.id);
  })

  return(<Space>
    <MessageOutlined>
      {count}
    </MessageOutlined>
  </Space>)
}
/**
 * 题解列表组件
 * @constructor
 */
const Solutions: FC<IProps> = (props: IProps) => {

  //是否点击详情
  const [isCliked, setIsClicked] = useState(false);
  //点击详情的题解id
  const [clickId, setClickId] = useState<number>(undefined);
  const {initialState} = useModel('@@initialState')
  //根据题目id获取对应的题解
  const {data: nums} = useRequest(
    () => {
      return getProblemSolutionsRead(props);
    });
    const data1 = nums.solution_list || [];


  /**
   * 点击列表项设置信息
   * @param id
   */
  const click = (id: number) => {
      setIsClicked(true);
      setClickId(id);
  };

  // @ts-ignore
  return (
    <div>
    <ProCard split={"vertical"} style={{borderRadius: 5}}>
      <ProCard colSpan={"45%"} style={{ height: document.body.clientHeight - 160, overflow: 'auto' }}>
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
          dataSource={data1.sort((a,b) => b.isChecked - a.isChecked)}
          renderItem={(item) => (
            <List.Item
              onClick={() => {click(item.solutionId)}}
              key={item.title}
              actions={[
                <Star item={item}/>,
                <Like item={item}/>,
                <Message item={item}/>
              ]}
            >
              <List.Item.Meta
                //https://joeschmoe.io/api/v1/random
                avatar={<Avatar src={'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png'}/>}
                title={item.isChecked?(<Tag color="red">{'已审核'}</Tag>):''}
                description={initialState.currentUser.username}
              />
              <p className={styles.item}>{item.title}</p>
            </List.Item>

          )}
        />
      </ProCard>
      <ProCard>
        {isCliked && <SolutionDetail solutionId={clickId}/>}
      </ProCard>

    </ProCard>
    </div>
  )
}

export default Solutions;
