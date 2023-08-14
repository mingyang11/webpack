import React from 'react';
import styles from './index.module.less';

function ReflowAndRepaint() {
  const containerRef = React.useRef();
  return (
    <div ref={containerRef} className={styles.container} yang="杨明">
      测试测试车型饿死测试测试车型饿死测试测试车型饿死测试测试车型饿死测试测试车型饿死测试测试车型饿死测试测试车型饿死测试测试车型饿死测试测试车型饿死测试测试车型饿死测试测试车型饿死测试测试车型饿死测试测试车型饿死测试测试车型饿死测试测试车型饿死测试测试车型饿死测试测试车型饿死测试测试车型饿死
    </div>
  );
}

export default ReflowAndRepaint;
