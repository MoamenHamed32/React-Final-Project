# Frontend Developer Task - Trending Movies, TV Shows, and People

This is a frontend developer task for ITI, where you are required to build a web application that displays information about trending movies, TV shows, and people. You will use HTML, CSS, JavaScript, and React to fetch data from an API and present it in an organized manner. The application should also include searching and filtering functionality.

## Description

Build an application about “Trending Movies, TV shows, and people”. You have received a simple design and an API that returns a JSON array. The main objectives are:

- Fetch data from the API: Use the [TMDb API](https://api.themoviedb.org/3/trending/all/day?api_key=14bdd69ce887376edfafb09f23f78fe9) to retrieve daily trending lists of movies, TV shows, and people.

- Filter the data: Implement local filtering based on the "media_type" property in the API response object. The default filter should include "movie," "tv," and "person."

- Searching: Utilize the [TMDb search API](https://api.themoviedb.org/3/search/multi?api_key=14bdd69ce887376edfafb09f23f78fe9&query={query}) for server-side searching.

- Details Page: For each item, use the [TMDb details API](https://api.themoviedb.org/3/{media_type}/{item_id}?api_key=14bdd69ce887376edfafb09f23f78fe9) to display more information. Media type can be "movie," "tv," or "person."

- Image URLs: The base URL for "poster_path" images is "https://image.tmdb.org/t/p/w500/," and for "backdrop_path" images, it is "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/."

## Functionality

- Fetch trending data from TMDb API.
- Filter the data locally by media type ("movie," "tv," "person").
- Implement server-side searching using the TMDb search API.
- Display detailed information about selected items using the details API.
- Handle different media types: "movie," "tv," and "person."

## Development Instructions

When developing this application, please consider the following:

- Organized Project Structure: Maintain an organized file structure for your project.
- Clean and Commented Code: Write clean, well-commented code that is easy to understand.
- Correct Business Rules: Implement the business rules accurately.
- Responsive Design: Ensure that your application is responsive and compatible with various browsers.
- Use ReactJS: Use the latest version of ReactJS, functional components with hooks.
- Create React App: Start your project with Create React App to set up the initial environment.
- React Router: Implement "client-side routing" using React Router.
- Material UI (MUI): Use Material UI for UI components to speed up development.
- Unit Testing: Include unit tests for your components.

## How to Submit

1. Complete the assignment by implementing the functionality and following the development instructions.
2. Push your local working copy to your GitHub repository.
3. Include a README file that describes your application and provides instructions on how to run it.

Thank you for taking on this task. We look forward to reviewing your work!
