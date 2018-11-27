import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import PostDetailView from './PostDetailView';

storiesOf('PostDetailView', module)
  .add('default', () => <PostDetailView />)
  .add('with content', () => <PostDetailView title="타이틀" body="내용" />)
  .add('작성자로 로그인한 경우', () => (
    <PostDetailView user={{ id: 0 }} title="타이틀" body="내용" />
  ));
