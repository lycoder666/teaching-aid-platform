import {useState} from "react";

export default () => {

  const {labels, setLabels} = useState(null);

  // const set = (lists) =>{
  //   setLabels(lists);
  // }


  return {labels, setLabels}

}
