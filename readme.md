Add the following to this `README.md` file:  
  * A short report explaining your design decisions and any challenges faced.
  * Documentation: Clear and concise documentation on how to run your application.

# Report

The Dog Facts API provides a simple and efficient way to retrieve interesting facts about dogs through a single endpoint, `GET /facts`. This API accepts an optional query parameter, `number`, which specifies the number of dog facts to return. If the `number` parameter is provided, it should be a positive integer; otherwise, all available facts will be returned. The API responds with a JSON object containing an array of facts and a success status. For example, a request to `GET /facts?number=1` will return a response such as `{"facts": ["A group of pugs is called a grumble."], "success": true}`. In cases where the `number` parameter is invalid (such as a negative value or zero), the API will respond with a 400 status code and a message indicating the error, e.g., `{"message": "Invalid number parameter", "success": false}`. Additionally, if a request is made to an unknown route, the API will return a 404 status code with a message stating that the resource was not found, formatted as `{"message": "Not Found", "success": false}`. This API is designed to provide users with easy access to a collection of dog facts while ensuring that invalid requests are properly handled with clear error messages.

Challenges faced include input validation for ensuring the number paramater is a valid integer. Properly handling different types of errors was essential for providing a smooth user experience.

## How to Run
- Open DevMatch
- Open online IDE or desktop IDE
- Clone repo: https://git.devmatch.xyz/76792b2e-0c2b-4c03-a65a-59135bc12613.git
- Run `node server.js`