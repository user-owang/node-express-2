### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  JSON Web Tokens module for node that helps to verify the authenticity of JSON tokens

- What is the signature portion of the JWT? What does it do?
  The signature is an encrypted version of the header and payload that is verified on the server side to ensure it has not been altered

- If a JWT is intercepted, can the attacker see what's inside the payload?
  Yes

- How can you implement authentication with a JWT? Describe how it works at a high level.
  upon log in, we send a JWT with logged in user as payload which the client will store that JWT in cookies. Then the client sends that JWT on every request which the server side can authenticate

- Compare and contrast unit, integration and end-to-end tests.
  unit testing tests individual functions in isolation to see if they work as intended.
  integration testing tests if individual functions are working together correctly to create the desired outcome
  end-to-end testing tests if users are able to navigate and properly use an app correctly using clicks/scrolls and human inputs

- What is a mock? What are some things you would mock?
  a mock is a simulated object or component that mirrors the behavior of its real counterpart in a testing situation. A database query could be mocked in a test for routes so that you are testing the route logic in isolation instead of testing whether or not the db querys work.

- What is continuous integration?
  it is an approach to development where commits are done often and code is automatically tested upon a commit.

- What is an environment variable and what are they used for?
  an environment variable is a dynamic-named value that effects the running processes. They are commonly used for configuration, path definitions and security.

- What is TDD? What are some benefits and drawbacks?
  test driven development. Benefits: committed code ends up being error free, devs are quickly able to identify errors, better documentation. Drawbacks: significant overhead time investment in the beginning, potentially difficult to maintain a large amount of tests.

- What is the value of using JSONSchema for validation?
  it is much cleaner than writing a bunch of individual if statements for validation and it is something that can be provided for documentation.

- What are some ways to decide which code to test?

- What does `RETURNING` do in SQL? When would you use it?
  Determines what values get output after running a SQL query. One use case for it would be to return the row in a table that gets updated because otherwise, nothing is returned. Returning something also helps make it easier to check to see if there is a not found error without having to run a separate query.

- What are some differences between Web Sockets and HTTP?

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  There are things I prefer about both. I like the dependency/module tracking in node, but in python, it is nice to not have to define what you are exporting from a different file. I like how express organizes routes a lot better.
