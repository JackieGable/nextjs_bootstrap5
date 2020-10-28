import Head from 'next/head';
import { Kanban } from 'react-bootstrap-icons';
import { List } from 'react-bootstrap-icons';

export default function Home() {

  return (
	<div className="bg-light">
		<Head>
			<title>Create Next App + Bootstrap 5</title>
			<link rel="icon" href="/favicon.ico" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
		</Head>

		<div id="main" className="p-0 w-100 float-right">
			<header className="container-fluid">
				<div className="row">
					<nav className="navbar navbar-expand navbar-dark">
						<a href="javascript:void(0)" className="nav-link">
							<List color="white" size={16} />
						</a>
						<a className="nav-link active" aria-current="page" href="#">
							Home
						</a>
						<a className="nav-link" href="#">Features</a>
						<a className="nav-link" href="#">Contact</a>
					</nav>
				</div>
			</header>
			<div className="container">
				<main className="row">
					<div className="col-12 col-md-4 mx-auto">
						<h1>Next js + Bootstrap 5</h1>
						<p>Boilerplate to start new projects using Next js and Bootstrap@next</p>
						<p>
							<a href="#" className="btn btn-secondary text-white">Learn more</a>
						</p>

					</div>
				</main>
			</div>
			<footer className="bg-secondary py-3">
				<div className="container">
					<div className="row">
						<div className="col">
							<p className="p-0 m-0 text-white">by <a href="//twitter.com/wicttor">@wicttor</a></p>
						</div>
					</div>
				</div>
			</footer>
		</div>

		<script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha2/js/bootstrap.bundle.min.js" integrity="sha384-BOsAfwzjNJHrJ8cZidOg56tcQWfp6y72vEJ8xQ9w6Quywb24iOsW913URv1IS4GD" crossOrigin="anonymous"></script>
	</div>
  )
}
