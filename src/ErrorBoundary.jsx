import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error, info) {
    console.error('error occurred, see details below')
    console.error(error)
    console.error(info)
  }

  render() {
    if (this.state.hasError) {
      return <h1>An unexpected error occurred. Please try refershing the page.</h1>;
    }

    return this.props.children; 
  }
}

export {ErrorBoundary}

