import React from "react";

export default class ErrorBoundary extends React.Component {

  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true, error, errorInfo })
  }

  render() {
    const { hasError, error, errorInfo } = this.state

    return hasError ? (
      <div>
        <h3>Aconteceu algo errado. Veja o que foi:</h3>
        <details style={{ whiteSpace: "pre-wrap" }}>
          {error && error.toString()}
          <br />
          {errorInfo.componentStack}
        </details>
      </div>
    ) : (
      this.props.children
    )
  }
}
