import { MoveRight } from 'lucide-react';
import { type ButtonHTMLAttributes } from 'react';
import { useNavigate } from 'react-router';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  link?: string;
  className?: string;
}

const Button = ({
  text,
  link,
  className = '',
  onClick,
  ...rest
}: ButtonProps) => {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (link) {
      navigate(link);
      return;
    }

    onClick?.(event);
  };

  return (
    <button
      type='button'
      className={`md:w-55.5 md:h-16 w-45 h-12 flex items-center justify-center gap-2 cursor-pointer text-sm md:text-base ${className}`}
      onClick={handleClick}
      {...rest}
    >
      <span>{text}</span>
      <MoveRight />
    </button>
  );
};

export default Button;
