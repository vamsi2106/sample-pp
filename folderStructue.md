src/
│
├── assets/ # Images, icons, and other assets
├── components/ # Reusable components
│ ├── CartItem.jsx # Individual cart item component
│ ├── Footer.jsx # Footer component
│ ├── Navbar.jsx # Navbar component
│ └── ProductItem.jsx # Single product item component
│
├── pages/ # Main pages of the app
│ ├── CartPage.jsx # Cart page
│ ├── HomePage.jsx # Home page
│ ├── ProductsPage.jsx # Products listing page
│ └── ProductDetailsPage.jsx # Single product details page
│
├── features/ # Redux feature slices (cart, products)
│ ├── cart/
│ │ ├── cartSlice.js # Cart reducer and actions
│ │ └── cartSelectors.js # Selectors for accessing cart state
│ ├── products/
│ │ ├── productsSlice.js # Products reducer and actions
│ │ └── productsSelectors.js# Selectors for accessing products state
│
├── routes/ # Application routing and protected routes
│ ├── ProtectedRoute.jsx # Component for protected routes
│ └── AppRoutes.jsx # Main routing configuration
│
├── store/ # Redux store setup
│ └── store.js # Root store with reducers
│
├── App.js # Main app component
├── index.js # React DOM entry point
├── api.js # Placeholder for API requests
└── styles.css # Global styles
