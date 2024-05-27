import React from 'react';
import './buttonHogar.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;

  

//   fontFamily :string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const ButtonHogar = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  
  ...props
}: ButtonProps) => {
    
    // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const mode = 'storybook-buttonHogar--primary'
  return (
    <button
      type="button"
      className={['storybook-buttonHogar', `storybook-buttonHogar--${size}`, mode].join(' ')}
      {...props}
    >
      {label}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
};
