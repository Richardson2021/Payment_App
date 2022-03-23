import React from "react";
import ReactDom from "react-dom";

import "./styles.css";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

class DataFetcher extends React.Component {
  state = {
    isLoading: false,
    error: null,
    posts: []
    }
    
 componentDidMount() {
  this.setState({ isLoadind: true })
  fetch(this.props.url)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
      throw Error("Error fetching posts!")
      }
   })
   .then(posts => this.setState({ posts, isLoading: false }))
   .catch(error => this.setState({ error }))
}

render() {
  return this.props.children(this.state)
 }
}

class AppRenderProps extends React.Component {
  render() {
    return (
      <div>
        <h1>With Render Props</h1>
        <DataFetcher url={BASE_URL}>
          {({ error, isLoading, posts }) => {
            if (error) {
              return <p stile={{ color: "red" }}>
