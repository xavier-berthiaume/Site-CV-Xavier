import { faGithub, faMastodon, faReddit } from "@fortawesome/free-brands-svg-icons";
import { faHome, faUser, faEnvelope, faCode, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Sidebar.scss";

function Sidebar() {


	return (
		<div className="nav-bar">
			
			<a href="#top" className="logo">XB</a>

			<nav>
				<a href="#greeter">
					<FontAwesomeIcon icon={faHome} />
				</a>
				<a 
					href="#about"
					className="about-link"
				>
					<FontAwesomeIcon icon={faUser} />
				</a>
				<a 
					href="#skills"
					className="skills-link"
				>
					<FontAwesomeIcon icon={faUserGraduate} />
				</a>
				<a 
					href="#projects"
					className="projects-link"
				>
					<FontAwesomeIcon icon={faCode} />
				</a>
				<a 
					href="#contact"
					className="contact-link"
				>
					<FontAwesomeIcon icon={faEnvelope} />
				</a>
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
