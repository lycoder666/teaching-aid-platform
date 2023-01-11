import { useState } from 'react';

export default () => {
  const [testInfo, setTestInfo] = useState('initial');

  const changeInfo = (info: string) => {
    setTestInfo(info);
  };

  return { testInfo, changeInfo };
};
