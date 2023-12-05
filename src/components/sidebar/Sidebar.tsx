import { IconDefinition, faGithub, faMastodon, faReddit } from "@fortawesome/free-brands-svg-icons";
import { faHome, faUser, faEnvelope, faCode, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, animateScroll as scroll } from "react-scroll";

import "./Sidebar.scss";

interface SidebarProps {
	block_list: (string | IconDefinition)[][];
};

function Sidebar({block_list}: SidebarProps) {
	
	const scroll_options = {
		duration: 1000,
		smooth: true,
	}; 
	
	const scrollToTop = () => {
		scroll.scrollToTop(scroll_options);
	};

	const generateHoverText = (block_id: string) => {
		return `
			.nav-bar nav a.${block_id}::after {
				content: "${block_id.toUpperCase()}";
			}
		`;
	};

	return (

		<div className="nav-bar">
			
			{<a href="#" onClick={scrollToTop} className="logo">XB</a>}

			<nav>

				{block_list.map((block_info) => {
					return (
						<>
							<style>
								{generateHoverText(block_info[0].toString())}
							</style>
							<Link
								className={block_info[0]}
								activeClass=""
								to={block_info[0]}
								spy={true}
								smooth={true}
								duration={500}
							>
								<FontAwesomeIcon icon={block_info[1]} />
							</Link>
						</>
					);
				})}

			</nav>
			<ul>
				<li><a target="_blank" rel="noreferrer" href="https://github.com/xavier-berthiaume">
					<FontAwesomeIcon icon={faGithub} />
				</a></li>
				
				<li><a target="_blank" rel="noreferrer" href="https://piaille.fr/@xavier_berthiaume">
					<FontAwesomeIcon icon={faMastodon} />
				</a></li>
				<li><a target="_blank" rel="noreferrer" href="https://jlai.lu/u/xavier_berthiaume">
					<FontAwesomeIcon icon={faReddit} />
				</a></li>
			</ul>
		</div>

	);

};

export default Sidebar;
