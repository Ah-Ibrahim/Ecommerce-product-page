import './SideMenu.css';
import { AnimatePresence, motion } from 'motion/react';

function SideMenu({ onClose }) {
	return (
		<div className="overlay" onClick={onClose}>
			<motion.div
				className="menu-container"
				onClick={(e) => e.stopPropagation()}
				initial={{
					x: '-100%',
				}}
				animate={{
					x: 0,
					transition: {
						duration: 0.35,
						ease: 'easeInOut',
					},
				}}
				exit={{
					x: '-100%',
					transition: {
						duration: 0.35,
						ease: 'easeInOut',
					},
				}}>
				<button className="btn btn--icon btn--menu" onClick={onClose}>
					<svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
						<path
							d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
							fillRule="evenodd"
						/>
					</svg>
				</button>
				<ul className="menu-container__links">
					<li>
						<a href="#">Collections</a>
					</li>
					<li>
						<a href="#">Men</a>
					</li>
					<li>
						<a href="#">Women</a>
					</li>
					<li>
						<a href="#">About</a>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
				</ul>
			</motion.div>
		</div>
	);
}

export default SideMenu;
