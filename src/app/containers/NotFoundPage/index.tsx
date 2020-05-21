import React from 'react';
import { Link } from 'app/components/Link';
import { NavBar } from 'app/containers/NavBar';
import { Helmet } from 'react-helmet-async';

export function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 Page Not Found</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <NavBar />
      <div>
        <div>
          4
          <span role="img" aria-label="Crying Face">
            😢
          </span>
          4
        </div>
        <p>Page not found.</p>
        <Link to={process.env.PUBLIC_URL + '/'}>Return to Home Page</Link>
      </div>
    </>
  );
}
