# wanderLust

**wanderLust** is a web application designed for travel enthusiasts to explore, plan, and share their travel experiences. Whether you're looking for inspiration for your next trip or want to document your own adventures, wanderLust has got you covered.

## Features

- **Explore Destinations**: Browse through a curated list of popular travel destinations with detailed information, photos, and user reviews.
- **Travel Planning**: Create and manage your travel itineraries with ease. Add destinations, activities, and notes to your plans.
- **User Profiles**: Create a personalized profile to share your travel experiences, photos, and tips with the community.
- **Social Interaction**: Follow other travelers, like their posts, and leave comments to engage with the community.
- **Search & Filters**: Easily search for destinations or activities using filters like location, budget, and interests.
- **Responsive Design**: Fully responsive design that works seamlessly on desktop, tablet, and mobile devices.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Deployment**: Heroku, Netlify
- **Version Control**: Git, GitHub

## Installation

To run wanderLust locally on your machine, follow these steps:

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (v4.4 or higher)

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/jalajxdabas/wanderLust.git
   cd wanderLust
   ```

2. **Install Dependencies**

   Navigate to both the `client` and `server` directories and install the required dependencies.

   ```bash
   cd client
   npm install

   cd ../server
   npm install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the `server` directory and add the following variables:

   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/wanderlust
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Start the Development Server**

   In the `server` directory, start the backend server:

   ```bash
   npm start
   ```

   In the `client` directory, start the frontend development server:

   ```bash
   npm start
   ```

5. **Access the Application**

   Open your browser and navigate to `http://localhost:3000` to access the application.

## Usage

- **Sign Up/Log In**: Create an account or log in to access all features.
- **Explore**: Browse through destinations, read reviews, and get inspired.
- **Plan**: Create and manage your travel itineraries.
- **Share**: Post your travel experiences, photos, and tips.
- **Interact**: Follow other users, like posts, and leave comments.

## Contributing

We welcome contributions from the community! If you'd like to contribute to wanderLust, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your fork.
5. Submit a pull request to the main repository.

Please ensure your code follows the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgments

- Special thanks to all the contributors who have helped make wanderLust a reality.
- Inspiration for this project came from various travel blogs and platforms.

## Contact

For any questions, suggestions, or feedback, feel free to reach out:

- **Jalaj Dabas** - [jalajdabas4@gmail.com](mailto:jalajxdabas@gmail.com)
- **GitHub**: [jalajxdabas](https://github.com/jalajxdabas)

---

**Happy Traveling!** 🌍✈️
```

### Notes:
- Replace the placeholder logo URL with the actual logo if available.
- Update the contact information if necessary.
- If there are additional features or technologies used, make sure to include them in the relevant sections.

This README should provide a comprehensive guide for anyone looking to understand, use, or contribute to the `wanderLust` project.
