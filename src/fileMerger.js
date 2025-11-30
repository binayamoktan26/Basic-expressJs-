export const makeHtmlString = (userArg) => {
  const str = userArg.reduce(
    (acc, user) =>
      user.length
        ? acc + `<li>${user.split(",")[0]} :${user.split(",")[1]} </li>`
        : acc,
    ""
  );

  return (
    `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=
    , initial-scale=1.0"
    />
    <!-- bootstrap cdn  -->

    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="./style.css" />
    <title>My Diary</title>
    <!-- <style>
      body {
        margin: 0;
        padding: 0;
      }
      .wrapper {
        font-size: 1.5rem;
      }
      nav {
        display: flex;
        justify-content: space-between;
        padding: 15px;
      }
      a {
        color: white;
      }
    </style> -->
  </head>
  <body>
    <div class="wrapper">
      <nav style="background: black; color: white">
        <div>SSR</div>
        <div>
          <a href="/">Home </a>
          <a href="/login">Log In</a>
          <a href="/register">Register</a>
        </div>
      </nav>
     
      

      <div class="container">

       
      <h1>Welcome to Anime World</h1>
      <hr />  
       <ul> ` +
    str +
    ` 
    </ul>
    </div>
    </div>
  </body>
</html>
`
  );
};
