import React from 'react';
import { branch, renderComponent } from 'recompose';

const NotSupportedMessage = () => <h3>お使いのブラウザはサポートされておりません</h3>

const isSupportedBrowser = () => {
  const flag = false
  if(flag){
    return false
  }
  return true
}

const withBrowserCheck = branch(
  app => {
    console.log('app', app)
    return isSupportedBrowser
  },
  component =>component, 
  renderComponent(NotSupportedMessage)
)

const Header = () => (
  <div>header</div>
)

const MainApp = withBrowserCheck(Header)

export default MainApp;