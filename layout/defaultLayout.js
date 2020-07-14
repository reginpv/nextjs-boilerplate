import { Component } from 'react';
import Head from '../components/Head';
export default class DefaultLayout extends Component {
  render() {
    return(
      <>
        <Head />
        {this.props.children}
      </>
    )
  }
}