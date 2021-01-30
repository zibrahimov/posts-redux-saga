import React from 'react';

const LoadingPlaceholder = ({ isLoading, children }: Props) => (isLoading ? (
  <div className="margin-auto">
    <div className="spinner-border" role="status">
    </div>
  </div>
) : (
  children
));
interface Props {
  children: any;
  isLoading: boolean,
};
export default LoadingPlaceholder;
