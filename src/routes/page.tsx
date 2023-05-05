import { Helmet } from '@modern-js/runtime/head';
import './index.css';
import { useModel } from '@modern-js/runtime/model';
import { Button } from '@arco-design/web-react';
import { countModel } from '@/store/counter';

const Index = () => {
  const [counter, actions] = useModel(countModel);
  return (
    <div className="container-box">
      <Helmet>
        <title>首页</title>
      </Helmet>
      首页
      <Button
        type="primary"
        onClick={() => {
          actions.add();
        }}
      >
        点击
      </Button>
      <div>{counter.value}</div>
    </div>
  );
};
export default Index;
