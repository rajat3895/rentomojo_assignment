import React, {lazy, Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';

const Home = lazy(() => import('../components/home'));
const PostsList = lazy(() => import('../components/post-list'));
const PostDetails = lazy(() => import('../components/post-details'));

export default () => {
    return (
      <Suspense fallback={<p />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/posts-list" component={PostsList} />
          <Route path="/post-details" component={PostDetails} />
        </Switch>
      </Suspense>
    );
};
