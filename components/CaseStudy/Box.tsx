import classNames from 'classnames';
import type { FC, PropsWithChildren } from 'react';

interface BoxProps {
	className?: string;
}

const Box: FC<PropsWithChildren<BoxProps>> = ({ children, className }) => {
	return (
		<div
  className={classNames(
    className,
    'border border-cyan-50 border-collapse mb-6 rounded-xl px-8 py-6 drop-shadow-lg'
  )}
>
  {children}
</div>

	);
};

export { Box };
