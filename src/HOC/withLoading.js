import React from 'react';

function withLoading(WrappedComponent) {
  return function withLoading(props) {
    // HOC 가 관심있는 props만 넘겨준다.
    const { loading, ...rest } = props;

    if (loading) {
      return 'loading...';
    } else {
      return <WrappedComponent {...rest} />;
    }
  };
}

export default withLoading;
