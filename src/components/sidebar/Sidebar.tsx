import { faGithub, faMastodon, faReddit } from "@fortawesome/free-brands-svg-icons";
import { faHome, faUser, faEnvelope, faCode, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, animateScroll as scroll } from "react-scroll";

import "./Sidebar.scss";

function Sidebar() {
	
	const scroll_options = {
		duration: 1000,
		smooth: true,
	}; 
	
	const scrollToTop = () => {
		scroll.scrollToTop(scroll_options);
	};

	return (
		<div className="nav-bar">
			
			<a href="#" onClick={scrollToTop} className="logo">XB</a>

			<nav>
				<Link
					activeClass=""
					to="greeter"
					spy={true}
					smooth={true}
					duration={500}

				>
					<FontAwesomeIcon icon={faHome} />
				</Link>
				<Link
					className="about-link"
					activeClass=""
					to="about"
					spy={true}
					smooth={true}
					duration={500}
				>
					<FontAwesomeIcon icon={faUser} />
				</Link>
				<Link
					className="skills-link"
					activeClass=""
					to="skills"
					spy={true}
					smooth={true}
					duration={500}
				>
					<FontAwesomeIcon icon={faUserGraduate} />
				</Link>
				<Link
					className="projects-link"
					activeClass=""
					to="projects"
					spy={true}
					smooth={true}
					duration={500}
				>
					<FontAwesomeIcon icon={faCode} />
				</Link>
				<Link
					className="contact-link"
					activeClass=""
					to="contact"
					spy={true}
					smooth={true}
					duration={500}
				>
					<FontAwesomeIcon icon={faEnvelope} />
				</Link>
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
