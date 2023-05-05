import { Helmet } from '@modern-js/runtime/head';
import { useModel } from '@modern-js/runtime/model';
import { Button, Spin } from '@arco-design/web-react';
import get from '@api/info/[type]';
import { useRequest } from 'ahooks';
import style from './index.module.less';
import { countModel } from '@/store/counter';

const Index = () => {
  const [counter, actions] = useModel(countModel);
  const { data, loading } = useRequest(() => {
    return get('type1', { query: { username: '123' } });
  });
  return (
    <div className={style['container-box']}>
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
      <Spin loading={loading}>{JSON.stringify(data)}</Spin>
    </div>
  );
};
export default Index;
