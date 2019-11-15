import React from 'react';
import Button from './Button';

const LoadButton = ({
  isLoading,
  onLoadRates,
  ...props,
}) => (
  <Button
    onClick={onLoadRates}
    disabled={isLoading}
    {...props}
  >
    {isLoading ? "Loading..." : "Load Rates"}
  </Button>
);

export default LoadButton;
