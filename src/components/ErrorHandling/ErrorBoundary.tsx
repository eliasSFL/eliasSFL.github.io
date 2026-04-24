import React, { useState } from "react";
import {
  useRouteError,
  isRouteErrorResponse,
  useNavigate,
} from "react-router-dom";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return <ErrorCard title="Something went wrong" />;
    }
    return this.props.children;
  }
}

export const ErrorElement: React.FC = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <ErrorCard
        eyebrow={`Error ${error.status}`}
        title={error.status === 404 ? "Page not found" : error.statusText}
        body={
          error.status === 404
            ? "The page you're looking for doesn't exist or has moved."
            : undefined
        }
      />
    );
  }

  if (error instanceof Error) {
    return (
      <ErrorCard
        eyebrow="Unexpected error"
        title="Something broke while rendering this page"
        body={error.message}
        details={error.stack}
      />
    );
  }

  return <ErrorCard title="Unknown error" />;
};

interface ErrorCardProps {
  eyebrow?: string;
  title: string;
  body?: string;
  details?: string;
}

const ErrorCard: React.FC<ErrorCardProps> = ({
  eyebrow,
  title,
  body,
  details,
}) => {
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(false);
  const isDev = import.meta.env?.DEV ?? false;

  return (
    <main className="m-0 px-4 py-12 max-w-3xl mx-auto flex flex-col items-center text-center">
      <section
        className="w-full p-6 md:p-10 rounded-2xl shadow-sm flex flex-col items-center gap-4"
        style={{
          backgroundColor: "var(--color-surface)",
          border: "1px solid var(--color-border)",
        }}
      >
        {eyebrow && (
          <span
            className="text-xs uppercase tracking-wider font-semibold"
            style={{ color: "var(--color-text-muted)" }}
          >
            {eyebrow}
          </span>
        )}
        <h1
          className="text-2xl md:text-3xl font-semibold"
          style={{ color: "var(--color-accent-secondary)" }}
        >
          {title}
        </h1>
        {body && (
          <p
            className="leading-relaxed text-sm md:text-base max-w-prose"
            style={{ color: "var(--color-text)" }}
          >
            {body}
          </p>
        )}
        <div className="flex flex-row flex-wrap gap-3 mt-2">
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 rounded-xl font-medium text-sm transition-transform duration-150 hover:scale-[1.02]"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-bg)",
              border: "1px solid var(--color-accent)",
            }}
          >
            Return home
          </button>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 rounded-xl font-medium text-sm transition-transform duration-150 hover:scale-[1.02]"
            style={{
              backgroundColor: "transparent",
              color: "var(--color-text)",
              border: "1px solid var(--color-border)",
            }}
          >
            Go back
          </button>
        </div>
        {isDev && details && (
          <div className="w-full mt-4">
            <button
              onClick={() => setShowDetails((s) => !s)}
              className="text-xs underline"
              style={{ color: "var(--color-text-muted)" }}
            >
              {showDetails ? "Hide" : "Show"} stack trace (dev only)
            </button>
            {showDetails && (
              <pre
                className="mt-2 text-left text-xs overflow-auto p-3 rounded-lg max-h-64"
                style={{
                  backgroundColor: "var(--color-bg)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text-muted)",
                }}
              >
                {details}
              </pre>
            )}
          </div>
        )}
      </section>
    </main>
  );
};
