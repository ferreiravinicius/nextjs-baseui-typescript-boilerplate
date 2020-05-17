import React from "react";
import App from "next/app";
import {LightTheme, BaseProvider, styled} from 'baseui';
import { Provider as StyletronProvider } from "styletron-react";
import {styletron, debug} from '../config/styletron';

const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});


export default class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <StyletronProvider value={styletron} debug={debug} debugAfterHydration>
        <BaseProvider theme={LightTheme}>
          <Centered>
            <Component {...pageProps} />
          </Centered>
        </BaseProvider>
      </StyletronProvider>
    );
  }
}
