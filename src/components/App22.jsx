class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

Greeting.defaultProps = {
  name: "Guest",
};
