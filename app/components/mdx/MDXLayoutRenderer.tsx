/* eslint-disable react/display-name */
import React from "react";
import * as _jsx_runtime from "react/jsx-runtime";
import ReactDOM from "react-dom";

export interface MDXLayoutRenderer {
  code: string;
  components?: any;
  [key: string]: unknown;
}

const getMDXComponent = (
  code: string,
  globals: Record<string, unknown> = {}
): React.ComponentType<any> => {
  const scope = { React, ReactDOM, _jsx_runtime, ...globals };
  const fn = new Function(...Object.keys(scope), code);
  return fn(...Object.values(scope)).default;
};

export const useMDXComponent = (
  code: string,
  globals: Record<string, unknown> = {}
): React.ComponentType<any> => {
  return React.useMemo(() => getMDXComponent(code, globals), [code, globals]);
};

export const MDXLayoutRenderer = ({
  code,
  components,
  ...rest
}: MDXLayoutRenderer) => {
  const Mdx = useMDXComponent(code);

  return <Mdx components={components} {...rest} />;
};
