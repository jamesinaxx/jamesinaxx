import styles from '../../styles/layout.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faTwitter,
	faTwitch,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faTree } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const FAI = (props: { icon: any; colour: string }) => {
	return (
		<FontAwesomeIcon
			icon={props.icon}
			className={styles.faIcon}
			style={{ color: props.colour }}
		/>
	);
};

export default function NavbarComp() {
	return (
		<Navbar bg='dark' variant='dark' className='navbar-expand-lg'>
			<Navbar.Brand href='/'>
				<img
					src='/images/profile.jpg'
					width='50px'
					alt='My profile picture'
					className={styles.profileImage}
				></img>
			</Navbar.Brand>

			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='mr-auto'>
					<Nav.Link href='/'>Home</Nav.Link>

					<NavDropdown title='Social links' id='basic-nav-dropdown'>
						<NavDropdown.Item
							href='https://github.com/jamesinaxx'
							target='_blank'
							className={styles.navbarItem}
						>
							<FAI icon={faGithub} colour='black' /> <p>GitHub</p>
						</NavDropdown.Item>
						<NavDropdown.Item
							href='https://twitter.com/jamesinaxx'
							target='_blank'
							className={styles.navbarItem}
						>
							<FAI icon={faTwitter} colour='#1DA1F2' />{' '}
							<p>Twitter</p>
						</NavDropdown.Item>
						<NavDropdown.Item
							href='https://twitch.tv/jamesinaxx'
							target='_blank'
							className={styles.navbarItem}
						>
							<FAI icon={faTwitch} colour='#9146FF' />{' '}
							<p>Twitch</p>
						</NavDropdown.Item>
						<NavDropdown.Item
							href='https://www.youtube.com/channel/UCwKytulnX600TzqeJAqbO6w'
							target='_blank'
							className={styles.navbarItem}
						>
							<FAI icon={faYoutube} colour='#FF0000' />{' '}
							<p>YouTube</p>
						</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item
							href='https://linktr.ee/jamesinaxx'
							target='_blank'
							className={styles.navbarItem}
						>
							<FAI icon={faTree} colour='green' /> <p>Linktree</p>
						</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
