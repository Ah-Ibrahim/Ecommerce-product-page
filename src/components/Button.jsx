import './Button.css';
import { motion } from 'motion/react';

function Button({ children, onClick }) {
	return (
		<motion.button
			className="btn btn--primary"
			onClick={onClick}
			whileTap={{
				scale: 0.9,
			}}
			whileHover={{
				scale: 1.05,
			}}
			transition={{
				ease: 'backOut',
			}}>
			{children}
		</motion.button>
	);
}

export default Button;
