import React from 'react';
import Button from './Button';

const LoadButton = ({
  className,
  isLoading,
  onLoadRates,
}) => (
  <Button
    className={className}
    onClick={onLoadRates}
    disabled={isLoading}
  >
    {isLoading ? "Loading..." : "Load Rates"}
  </Button>
);

export default LoadButton;
