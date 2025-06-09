import React from "react";
import ContadorComBug from "./ContadorComBug";
import MyErrorBoundary from "./ErrorBoundary";
import { ErrorBoundary } from "react-error-boundary";

export default function MyErrorBoundaryComponent() {
  const MyFallbackComponent = ({componentStack, error}) => {
    return (
      <div>
        <h3>Aconteceu algo errado. Veja o que foi:</h3>
        <details style={{ whiteSpace: "pre-wrap" }}>
          {error && error.toString()}
          <br />
          {componentStack}
        </details>
      </div>
    );
  };

  return (
    <div>
      <MyErrorBoundary>
        <ContadorComBug />
      </MyErrorBoundary>
      <ErrorBoundary FallbackComponent={MyFallbackComponent}>
        <ContadorComBug />
      </ErrorBoundary>
    </div>
  );
}
