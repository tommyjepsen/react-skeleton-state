  import React from 'react';

  export interface ReactSkeletonProps {
    children?:React.ReactNode;
    width?:number;
    height?:number;
    borderRadius?: number;
    variant: "rectangle" | "circle" | "text";
    fontSize?: string;
    backgroundColorStart?: string;
    backgroundColorEnd?: string;
  }

  declare const ReactSkeleton:  React.FC<ReactSkeletonProps>;

  export default ReactSkeleton;