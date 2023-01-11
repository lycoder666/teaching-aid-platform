import { useState } from 'react';

export default () => {
  const [labels, setLabels] = useState([]);
  // const set = (lists) =>{
  //   setLabels(lists);
  // }

  return { labels, setLabels };
};
