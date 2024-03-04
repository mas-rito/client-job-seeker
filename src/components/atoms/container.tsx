// @flow
import * as React from "react";
type Props = {
  className?: string;
  children?: React.ReactNode;
};
export function Container({ className, children }: Props) {
  return (
    <div className={`container mx-auto px-4 md:px-8 lg:px-16 ${className}`}>
      {children}
    </div>
  );
}
