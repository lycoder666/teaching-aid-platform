import { Card, Typography } from 'antd';
const { Title, Paragraph } = Typography;
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import OCRComponet from "@/pages/course/components/OCR";
import {ProCard} from "@ant-design/pro-components";
import SubmitComponent from "@/pages/course/components/Submit";

const markdownProblemDescription = `
你这个学期必须选修 \`numCourses\` 门课程，记为 \`0\` 到 \`numCourses - 1\`。 \n
在选修某些课程之前需要一些先修课程。 先修课程按数组\`prerequisites\` 给出，其中 \`prerequisites[i] = [ai, bi]\` ，表示如果要学习课程\`ai\`则必须先学习课程\`bi\` \n
- 例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1。\n
请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。

`;
type IProps = {
  problemId: number
};

const ProblemDescription: React.FC<IProps> = (props: IProps) => {


  return (
    <>
      <Title level={3}>课程表</Title>
      <Card>
        <Paragraph>
          <ReactMarkdown remarkPlugins={[gfm, remarkMath]} rehypePlugins={[rehypeKatex]}>
            {markdownProblemDescription}
          </ReactMarkdown>
        </Paragraph>
      </Card>

      <Title level={3}>OCR</Title>
      <OCRComponet />
      <Title level={3}>发布题解</Title>
      <ProCard  style={{borderRadius: 5}}>
        <SubmitComponent />
      </ProCard>
    </>
  );
};

export default ProblemDescription;
