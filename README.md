# Content Platform: Virtualized Masonry Grid with Photo Detail View

## Overview

This project is a Single Page Application (SPA) built with React, Vite, and TypeScript. It features a virtualized, responsive masonry grid that dynamically arranges photos fetched from the Unsplash API. Additionally, the application includes a detailed view for photos, displaying extended information and allowing for seamless navigation between the grid and detailed view.

## Features

### Virtualized Masonry Grid Layout

![Screenshot of the Masonry Grid](public/masonry-grid.png)

- **Responsive Design**: The grid layout adjusts dynamically based on the screen size, ensuring an optimal viewing experience on all devices.
- **Virtualization**: To efficiently handle large sets of images, the grid is virtualized, rendering only the photos visible in the viewport. This approach significantly improves performance by reducing the number of DOM nodes.
- **Infinite Scroll**: Implemented infinite scroll to dynamically load and display more photos as the user scrolls down the grid. This feature enhances user experience by providing a seamless and continuous browsing experience without requiring pagination. The infinite scroll implementation ensures that new photos are fetched efficiently, minimizing the number of API requests and maintaining smooth scrolling performance.
- **No External Libraries for Layout Management**: The masonry grid is implemented using pure React and CSS-in-JS, specifically with `react-jss` for styling, without relying on any external libraries for layout.

### Photo Details View

- **Detailed Photo Information**: When a photo is selected, a detailed view is displayed showing the photo in a larger size along with the title, description, photographer's name, and date taken.
- **Navigation**: A back button is provided to easily return to the masonry grid view.

### TypeScript

- **Strong Typing**: The application is written entirely in TypeScript, utilizing interfaces, types, utility types, and generic types to ensure type safety and code clarity.

### React Features

- **React Hooks**: The application makes effective use of React hooks such as `useState`, `useEffect`, and `useMemo` to manage state and side effects.
- **React Router**: Navigation between the masonry grid and detailed view pages is handled using React Router.
- **Performance Optimization**: `useMemo` and `useCallback` are used where necessary to prevent unnecessary re-renders or recalculations, enhancing the application's performance.

### Query Management

- **TanStack Query (react-query)**: Used for managing API requests and caching, ensuring efficient data fetching, synchronization, and updating in the application.

### Performance

- **Web Vitals**: The application is optimized for performance, focusing on web vitals metrics, bundle size, unused chunk sizes, and JavaScript execution time.
- **Image Optimization**: Images are optimized to reduce loading times and improve user experience.
- **Error Boundaries**: Error boundaries are implemented to provide better error handling and a more robust application.

### Extras

- **CSS-in-JS**: Styled-components and `react-jss` are used for styling, ensuring a modular and maintainable CSS structure.
- **Responsiveness**: The application is fully responsive, providing an optimal viewing experience across different devices.
- **Search Functionality (Bonus)**: A search feature allows users to search for photos by keywords, dynamically updating the masonry grid with relevant results from the Unsplash API.


## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/content-platform.git
   ```
   
2. **Navigate to the project directory**:
   ```bash
   cd content-platform
   ```
   
3. **Install dependencies**:
   ```bash
   pnpm install
   ```


## Configuration

The Unsplash API configuration is demonstrated in the `.env.example` file:

```.env.example
VITE_API_BASE_URL=https://api.unsplash.com
VITE_API_CLIENT_ID=access_key
VITE_PORT=3000
```

To run the application, you need to obtain an Unsplash API access key and configure it:

1. **Log in to [Unsplash](https://unsplash.com/).**
2. **Create a new application at [Unsplash Application Dashboard](https://unsplash.com/oauth/applications).**
3. **Obtain the Access Key of your application.**

Create a `.env` file in the cloned repository and set the `VITE_API_CLIENT_ID` to your Unsplash API access key.

```.env
VITE_API_BASE_URL=https://api.unsplash.com
VITE_API_CLIENT_ID=your_unsplash_access_key
VITE_PORT=3000
```


## Running the Application

To start the development server, run:

```bash
pnpm dev
```

This will start the application on `http://localhost:3000`.

## Building for Production

To build the application for production, run:

```bash
pnpm build
```

The optimized output will be located in the `dist` directory.

## Design Decisions

- **Virtualization**: Implemented using custom logic to avoid the overhead of external libraries, focusing on performance and responsiveness.
- **Infinite Scroll**: Implemented to enhance user experience with seamless and continuous loading of new photos.
- **TypeScript**: Ensured strong typing throughout the application for better maintainability and fewer runtime errors.
- **Performance Optimization**: Used `useMemo` and `useCallback` to optimize rendering and prevent unnecessary recalculations. Images are lazy-loaded to improve load times.
- **Error Handling**: Implemented error boundaries to catch and handle errors gracefully, improving user experience.
- **Query Management**: Utilized TanStack Query (react-query) for efficient data fetching, caching, and synchronization.

## Performance Considerations

- **Efficient Rendering**: Virtualization ensures that only visible items are rendered, reducing the DOM size and improving performance.
- **Infinite Scroll**: Efficiently loads and displays more photos as the user scrolls, minimizing API requests and maintaining smooth performance.
- **Optimized Asset Loading**: Images are optimized and lazy-loaded to enhance loading speed and reduce bandwidth usage.
- **Minimized JavaScript Execution**: Utilized hooks and memoization to minimize unnecessary JavaScript execution and reduce the load on the main thread.

## Testing

To run tests, use the following command:

```bash
pnpm test
```

Unit tests are provided to ensure the core functionality of the application is working as expected.

## Conclusion

This project demonstrates a strong understanding of React, TypeScript, and performance optimization techniques. The application is built to be responsive, efficient, and user-friendly, providing a seamless experience for browsing and viewing photos with the added feature of infinite scrolling.

---

For any questions or issues, please feel free to reach out or open an issue on the GitHub repository.
