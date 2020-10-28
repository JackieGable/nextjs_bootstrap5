import Head from 'next/head'

export default function Home() {
  return (
    <div className="d-flex h-100 text-center text-white bg-dark">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        
        <header className="mb-auto">
          <div>
            <h3 className="float-md-left mb-0">Next js + Bootstrap v5</h3>
            <nav className="nav nav-masthead justify-content-center float-md-right">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              <a className="nav-link" href="#">Features</a>
              <a className="nav-link" href="#">Contact</a>
            </nav>
          </div>
        </header>

        <main className="px-3">
          <h1>Cover your page.</h1>
          <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
          <p className="lead">
            <a href="#" className="btn btn-lg btn-secondary font-weight-bold border-white bg-white">Learn more</a>
          </p>
        </main>

        <footer className="mt-auto text-white-50">
          <p>Cover template for <a href="https://getbootstrap.com/" className="text-white">Bootstrap</a>, by <a href="https://twitter.com/mdo" className="text-white">@mdo</a>.</p>
        </footer>

      </div>

      <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha2/js/bootstrap.bundle.min.js" integrity="sha384-BOsAfwzjNJHrJ8cZidOg56tcQWfp6y72vEJ8xQ9w6Quywb24iOsW913URv1IS4GD" crossOrigin="anonymous"></script>
    </div>
  )
}
