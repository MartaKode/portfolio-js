import { Grow, Fade, Slide, Zoom } from '@material-ui/core';
import React, { useState } from 'react'
import Typewriter from 'typewriter-effect';
import resume from '../images/Marta_Krawczyk_Resume_Lambda_Student2.pdf'

function importAll(r) {
	let images = {};
	r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
	return images;
}

const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

const Porftolio = () => {
	const [scroll, setScroll] = useState(false)
	const [fade, setFade] = useState(false)
	const [workFly, setWorkFly] = useState(false)
	const [contactZoom, setContactZoom] = useState(false)

	return (
		<body className='body'>

			{/* <!-- Nav --> */}
			<nav id="nav">
				<ul class="container">
					<li><a href="#top" onClick={() => {
						setScroll(false);
						setTimeout(() => {
							setScroll(true)
						}, 0);
					}}>Top</a></li>
					<li><a href="#work"
						onClick={() => {
							setFade(false);
							setTimeout(() => {
								setFade(true)
							}, 0);
						}}
					>Skills</a></li>
					<li><a href="#portfolio"
						onClick={() => {
							setWorkFly(false);
							setTimeout(() => {
								setWorkFly(true)
							}, 0);
						}}
					>Portfolio</a></li>
					<li><a href="#contact"
						onClick={() => {
							setContactZoom(false);
							setTimeout(() => {
								setContactZoom(true)
							}, 0);
						}}
					>Contact</a></li>
					<li>
						<a target="blank" href={resume}>
							Resume
						</a>
					</li>
				</ul>
			</nav>

			{/* <!-- Home --> */}
			<article id="top" class="wrapper style1">
				<div class="container">
					{scroll ? <Slide direction="left" in={scroll} timeout={1500}>
						<div class="row">
							<div class="col-4 col-5-large col-12-medium">
								<span class="image fit"><img src={images["me2.jpg"]} alt="Marta" /></span>
							</div>
							<div class="col-8 col-7-large col-12-medium">
								<header>
									<h1 style={{ lineHeight: '79%', paddingBottom: 0 }}>
										<Typewriter
											options={{
												loop: true
											}}
											onInit={(typewriter) => {
												typewriter
													.pauseFor(2000)
													.typeString('Hi, I am <strong>Marta Krawczyk</strong>')
													.pauseFor(2500)
													.deleteChars(14)
													.typeString('a Full-Stack <strong>Web Developer</strong>')
													.pauseFor(2000)
													.start();

											}}
										/>
									</h1>
								</header>


								<p>I am currently practicing <strong>Web and Software Development</strong>. I posses a strong mathematical background,
							    obtained through my BS degree in Applied Mathmatics, so problem solving comes to me naturally and with a passion.
								My <a href="https://github.com/MartaKode" target="_blank">GitHub</a> contains a solid collection of projects created while at and beyond Lambda School.
							 </p>
								<a href="#work" class="button large scrolly">Learn about what I do</a>
							</div>
						</div>
					</Slide> :
						<Fade in={true} timeout={2000}>
							<div class="row">
								<div class="col-4 col-5-large col-12-medium">
									<span class="image fit"><img src={images["me2.jpg"]} alt="Marta" /></span>
								</div>
								<div class="col-8 col-7-large col-12-medium">

									<header>
										<h1>Hi, I am <strong> Marta Krawczyk</strong></h1>
									</header>

									<p>I am currently practicing <strong>Web and Software Development</strong>. I posses a strong mathematical background,
							    obtained through my BS degree in Applied Mathmatics, so problem solving comes to me naturally and with a passion.
								My <a href="https://github.com/MartaKode" target="_blank">GitHub</a> contains a solid collection of projects created while at and beyond Lambda School.
							 </p>
									<a href="#work" class="button large scrolly">Learn about what I do</a>
								</div>
							</div>
						</Fade>}

				</div>
			</article>

			<div className='parallax'></div>

			{/* <!-- Work --> */}
			<article id="work" class="wrapper style2">
				<div class="container" style={{ display: 'flex', justifyContent: 'space-evenly' }}>

					{fade ? <Slide in={fade} direction='right' timeout={1200}>
						<div class="row aln-center" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', marginTop: '6%' }}>
							<div class="col-4Skills col-6-mediumSkills col-12-smallSkills">
								<span class="icon featured js"></span>
							</div>
							<div class="col-4Skills col-6-mediumSkills col-12-smallSkills">
								<span class="icon featured react"></span>
							</div>
							<div class="col-4Skills col-6-mediumSkills col-12-smallSkills">
								<span class="icon featured html"></span>
							</div>
							<div class="col-4Skills col-6-mediumSkills col-12-smallSkills">
								<span class="icon featured node"></span>
							</div>
							<div class="col-4Skills col-6-mediumSkills col-12-smallSkills">
								<span class="icon featured gitflow"></span>
							</div>
						</div>
					</Slide> :
						<div class="row aln-center" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', marginTop: '6%' }}>
							<div class="col-4Skills col-6-mediumSkills col-12-smallSkills">
								<span class="icon featured js"></span>
							</div>
							<div class="col-4Skills col-6-mediumSkills col-12-smallSkills">
								<span class="icon featured react"></span>
							</div>
							<div class="col-4Skills col-6-mediumSkills col-12-smallSkills">
								<span class="icon featured html"></span>
							</div>

							<div class="col-4Skills col-6-mediumSkills col-12-smallSkills">
								<span class="icon featured node"></span>
							</div>
							<div class="col-4Skills col-6-mediumSkills col-12-smallSkills">
								<span class="icon featured gitflow"></span>
							</div>
						</div>
					}

					{/* ---------additional skills-------- */}
					<div id="borderLeft"></div>
					{fade ? <Slide in={fade} direction='left' timeout={1200}>
						<div class="row aln1-center" style={{ display: 'flex', flexDirection: 'column' }}>
							<header>
								<h2><strong>Technical Skills</strong></h2>
							</header>
							<div class="col-4Skills col-6-mediumSkills col-12-smallSkills">
								<h3>JavaScript </h3>
							</div>
							<div class="col-4Skills col-6-mediumSkills col-12-smallSkills">
								<h3>React | Redux</h3>
							</div>
							<div class="col-4Skills col-6-mediumSkills col-12-smallSkills">
								<h3>HTML | CSS</h3>
							</div>
							<div class="col-4Skills col-6-mediumSkills col-12-smallSkills">
								<h3>Express.js | Node.js</h3>
							</div>
							<div class="col-4Skills col-6-mediumSkills col-12-smallSkills">
								<h3>PostgresSQL | SQLite</h3>
							</div>
							<div class="col-4Skills col-6-mediumSkills col-12-smallSkills">
								<h3>CRUD Operations | Gitflow</h3>
							</div>
							<div class="col-4Skills col-6-mediumSkills col-12-smallSkills">
								<h3>Jest | Supertest </h3>
							</div>
							<div class="col-4Skills col-6-mediumSkills col-12-smallSkills">
								<h3>Python</h3>
							</div>
						</div>
					</Slide> :
						<div class="row aln1-center" style={{ display: 'flex', flexDirection: 'column' }}>
							<header>
								<h2><strong>Technical Skills</strong></h2>
							</header>
							<div class="col-4Skills col-6-mediumSkills col-12-smallSkills">
								<h3>JavaScript </h3>
							</div>
							<div class="col-4Skills col-6-mediumSkills col-12-smallSkills">
								<h3>React | Redux</h3>
							</div>
							<div class="col-4Skills col-6-mediumSkills col-12-smallSkills">
								<h3>HTML | CSS</h3>
							</div>
							<div class="col-4Skills col-6-mediumSkills col-12-smallSkills">
								<h3>Express.js | Node.js</h3>
							</div>
							<div class="col-4Skills col-6-mediumSkills col-12-smallSkills">
								<h3>PostgresSQL | SQLite</h3>
							</div>
							<div class="col-4Skills col-6-mediumSkills col-12-smallSkills">
								<h3>CRUD Operations | Gitflow</h3>
							</div>
							<div class="col-4Skills col-6-mediumSkills col-12-smallSkills">
								<h3>Jest | Supertest </h3>
							</div>
							<div class="col-4Skills col-6-mediumSkills col-12-smallSkills">
								<h3>Python</h3>
							</div>
						</div>
					}
				</div>
				<footer>
					<a href="#portfolio" class="button large scrolly">See some of my recent work</a>
				</footer>
			</article>

			<div className='parallax'></div>

			{/* <!-- Portfolio --> */}
			<article id="portfolio" class="wrapper style3">
				<div class="container" >
					<header>
						<h2><strong>Past Projects</strong></h2>
						<p style={{ fontSize: '1rem' }}>Click on images or titles to see the deployed websites or the github link to view the github repos</p>
					</header>
					<div class="row" style={{ justifyContent: 'center' }}>
						{workFly ? <Grow in={workFly} timeout={2000}>
							<div class="col-4work col-6-medium col-12-small">
								<article class="box style2">
									<div>
										<a href="https://martakode-react-redux-pokemon.now.sh/" target="_blank" class="image featured"><img src={images["pk-bg.jpg"]} alt="pokemon" /></a>
										<h3><a href="https://martakode-react-redux-pokemon.now.sh/" target="_blank">React Redux Pokemon</a></h3>
										<p>Rendering pokemon cards from an api using Redux</p>
									</div>
									<a href="https://github.com/MartaKode/React-Redux-App/tree/marta-krawczyk" target="_blank" class="buttonGit">Github</a>
								</article>
							</div>
						</Grow> :
							<div class="col-4work col-6-medium col-12-small">
								<article class="box style2">
									<div>
										<a href="https://martakode-react-redux-pokemon.now.sh/" target="_blank" class="image featured"><img src={images["pk-bg.jpg"]} alt="pokemon" /></a>
										<h3><a href="https://martakode-react-redux-pokemon.now.sh/" target="_blank">React Redux Pokemon</a></h3>
										<p>Rendering pokemon cards from an api using Redux</p>
									</div>
									<a href="https://github.com/MartaKode/React-Redux-App/tree/marta-krawczyk" target="_blank" class="buttonGit">Github</a>
								</article>
							</div>}
						{workFly ? <Grow in={workFly} timeout={3000}>
							<div class="col-4work col-6-medium col-12-small">
								<article class="box style2">
									<div>

										<a href="https://secretfamilyrecipes-2.now.sh/login" target="_blank" class="image featured"><img src={images["Screenshot_3.jpg"]} alt="secret-family-recipes" /></a>
										<h3><a href="https://secretfamilyrecipes-2.now.sh/login" target="_blank">Secret Family Recipes</a></h3>
										<p>A cooking application that lets you store your family's recipes in a safe place with the ability to add new recipes or edit and delete existing (user specific) recipes</p>
									</div>
									<a href="https://github.com/BW-Secret-Family-Recipes-2/client" target="_blank" class="buttonGit">Github</a>
								</article>
							</div>
						</Grow> :
							<div class="col-4work col-6-medium col-12-small">
								<article class="box style2">
									<div>

										<a href="https://secretfamilyrecipes-2.now.sh/login" target="_blank" class="image featured"><img src={images["Screenshot_3.jpg"]} alt="secret-family-recipes" /></a>
										<h3><a href="https://secretfamilyrecipes-2.now.sh/login" target="_blank">Secret Family Recipes</a></h3>
										<p>A cooking application that lets you store your family's recipes in a safe place with the ability to add new recipes or edit and delete existing (user specific) recipes</p>
									</div>
									<a href="https://github.com/BW-Secret-Family-Recipes-2/client" target="_blank" class="buttonGit">Github</a>
								</article>
							</div>
						}
						{workFly ? <Grow in={workFly} timeout={3000}>
							<div class="col-4work col-6-medium col-12-small">
								<article class="box style2">
									<div>
										<a href="https://cs-build-week1-conways-game-of-life.vercel.app/" target="_blank" class="image featured"><img src={images["Screenshot_6.jpg"]} alt="Game-of-life" /></a>
										<h3><a href="https://cs-build-week1-conways-game-of-life.vercel.app/" target="_blank">Conway's Game of Life</a></h3>
										<p>My implemention of acquaired knowledge of Computer Science turned into a represantion of Conway's Game of Life </p>
									</div>
									<a href="https://github.com/MartaKode/conways_game_of_life" target="_blank" class="buttonGit" >Github</a>
								</article>
							</div>
						</Grow> :
							<div class="col-4work col-6-medium col-12-small">
								<article class="box style2">
									<div>
										<a href="https://cs-build-week1-conways-game-of-life.vercel.app/" target="_blank" class="image featured"><img src={images["Screenshot_6.jpg"]} alt="Game-of-life" /></a>
										<h3><a href="https://cs-build-week1-conways-game-of-life.vercel.app/" target="_blank">Conway's Game of Life</a></h3>
										<p>My implemention of acquaired knowledge of Computer Science turned into a represantion of Conway's Game of Life </p>
									</div>
									<a href="https://github.com/MartaKode/conways_game_of_life" target="_blank" class="buttonGit" >Github</a>
								</article>
							</div>
						}
						{workFly ? <Grow in={workFly} timeout={2000}>
							<div class="col-4work col-6-medium col-12-small">
								<article class="box style2">
									<div>
										<a href="https://d.humanrightsfirst.dev/" target="_blank" class="image featured"><img src={images["hrf.jpg"]} alt="Human Rights First" /></a>
										<h3><a href="https://d.humanrightsfirst.dev/" target="_blank">Human Rights First</a></h3>
										<p>An application that takes information from data provided by the data science team collecting relevant incidents and data from Twitter, Reddit, and police agencies to display it on the map with the ability to filter the data by type of brutality, state and zipcode</p>
									</div>
									<a href="https://github.com/Lambda-School-Labs/Labs27-D-HRF-FE/tree/main" target="_blank" class="buttonGit">Github</a>
								</article>
							</div>
						</Grow> :
							<div class="col-4work col-6-medium col-12-small">
								<article class="box style2">
									<div>
										<a href="https://d.humanrightsfirst.dev/" target="_blank" class="image featured"><img src={images["hrf.jpg"]} alt="Human Rights First" /></a>
										<h3><a href="https://d.humanrightsfirst.dev/" target="_blank">Human Rights First</a></h3>
										<p>An application that takes information from data provided by the data science team collecting relevant incidents and data from Twitter, Reddit, and police agencies to display it on the map with the ability to filter the data by type of brutality, state and zipcode</p>
									</div>
									<a href="https://github.com/Lambda-School-Labs/Labs27-D-HRF-FE/tree/main" target="_blank" class="buttonGit">Github</a>
								</article>
							</div>}
					</div>
					<footer>
						<p>More can be found on my <a href="https://github.com/MartaKode" target="_blank">GitHub</a></p>
						<a href="#contact" class="button large scrolly">Get in touch with me</a>
					</footer>
				</div>
			</article>

			{/* <div className='parallax'></div> */}
			<div className='parallax'></div>


			{/* <!-- Contact --> */}
			<article id="contact" class="wrapper style4">
				<div class="container medium">

					<div class="col-12">
						<hr />
						<h3>Find me on ...</h3>
						<ul class="social">
							{contactZoom ? <Zoom in={contactZoom} timeout={2000}>
								<li><a href="https://github.com/MartaKode" target="_blank" class="icon brands fa-github"><span class="label">Github</span></a></li>
							</Zoom> :
								<li><a href="https://github.com/MartaKode" target="_blank" class="icon brands fa-github"><span class="label">Github</span></a></li>}
							{contactZoom ? <Zoom in={contactZoom} timeout={2500}>
								<li><a href="https://www.linkedin.com/in/marta-janina-krawczyk/" target="_blank" class="icon brands fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
							</Zoom> :
								<li><a href="https://www.linkedin.com/in/marta-janina-krawczyk/" target="_blank" class="icon brands fa-linkedin-in"><span class="label">LinkedIn</span></a></li>}
							{contactZoom ? <Zoom in={contactZoom} timeout={3000}>
								<li><a href="https://www.facebook.com/MartaJaninaKrawczyk" target="_blank" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
							</Zoom> :
								<li><a href="https://www.facebook.com/MartaJaninaKrawczyk" target="_blank" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>}
						</ul>
						<hr />
					</div>
					<div className='resumeEmail' style={{ display:'flex', justifyContent: 'space-between'}}>
					<div className='email'><h4>e-mail:</h4> <a>martaalicja113@gmail.com</a> </div>
					<div className='resume'><a target="blank" href={resume}>Resume</a></div>
						</div>
				</div>
			</article>

			{/* <!-- Scripts --> */}
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.scrolly.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>

		</body>
	)
}

export default Porftolio;