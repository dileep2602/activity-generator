
# Activity Generator

## Overview

Activity Generator is a web application that generates random activities or activities based on user specifications. This project is built with JavaScript, Node.js, and Express.js, and uses EJS for rendering pages. For styling, we use CSS. The application also integrates with external APIs via Axios to provide a variety of activity suggestions.

## Features

- **Random Activity Generation**: Get a random activity suggestion with a single click.
- **Specified Activity Generation**: Input specific criteria to get tailored activity suggestions.
- **External API Integration**: Uses Axios to call external APIs for a diverse range of activities.

## Technologies Used

- **JavaScript**: Programming language used for both client-side and server-side scripting.
- **Node.js**: JavaScript runtime environment used for building the backend.
- **Express.js**: Web framework for Node.js to handle routing and server-side logic.
- **EJS**: Embedded JavaScript templating for rendering HTML pages.
- **CSS**: For styling the application and enhancing the user interface.
- **Axios**: HTTP client for making API requests.
- **Body-parser**: Middleware for parsing incoming request bodies in a middleware before your handlers.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/dileep2602/activity-generator.git
   cd activity-generator
   ```

2. **Install dependencies**:
   Make sure you have [Node.js](https://nodejs.org/) installed. Then run:
   ```bash
   npm install
   ```

3. **Start the server**:
   ```bash
   node index.js
   ```

   By default, the application will be available at `http://localhost:3000`.

## Usage

1. Open your web browser and navigate to `http://localhost:3000`.
2. Use the provided interface to generate random activities or specify your criteria for tailored activity suggestions.

## API Integration

The application uses Axios to interact with an external API that provides different activity suggestions. You can customize the API endpoints and parameters in the `index.js` file.

## Project Structure

```
activity-generator/
│
├── public/
│   ├── styles/
│   │   └── main.css
│
├── views/
│   ├── index.ejs
│  
│
├── index.js
├── package.json
└── README.md
```

- `public/`: Contains static files such as CSS.
- `views/`: Contains EJS templates for rendering HTML pages.
- `app.js`: Main application file where Express is set up and configured.

## Contributing

Feel free to open an issue or submit a pull request if you have suggestions or improvements. Please ensure that your contributions adhere to the project's coding standards and include appropriate tests.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any questions or feedback, you can reach out to dileepkharvi037@gmail.com or create an issue on the [GitHub repository](https://github.com/dileep2602/activity-generator.git).