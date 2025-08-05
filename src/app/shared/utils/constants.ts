export const authRoutes = {
  login: 'auth/login',
  signup: 'auth/signup',
  verifyAccount: 'auth/verify-account',
  forgotPassword: 'auth/forgot-password',
  resetPassword: 'auth/reset-password',
  verifyEmail: 'auth/verify-email',
  logout: '',
};

export const appRoutes = {
  about: 'about',
  contact: 'contact',
  dashboard: 'dashboard',
  profile: 'profile',
  settings: 'settings',
  products: 'products',
  productDetails: 'products/:id',
  categories: 'categories',
  categoryDetails: 'categories/:id',
  brands: 'brands',
  brandDetails: 'brands/:id',
  cart: 'cart',
  checkout: 'checkout',
  shipping: 'shipping',
  payment: 'payment',
  orderConfirmation: 'order-confirmation',
  orders: 'orders',
  orderDetails: 'orders/:id',
  adminDashboard: 'admin/dashboard',
  wishlist: 'wishlist',
  address: 'address',
  notFound: 'not-found',
  blog: 'blog',
};

export const images = {
  eyeOpen: 'eye-open.svg',
  eyeClose: 'eye-close.svg',
  settings: 'setting.svg',
  uploadIcon: 'upload-icon.svg',
  user: 'user.svg',
  search: 'search.svg',
  darkLogo: 'dark_logo.png',
  moon: 'icon-moon.svg',
  sun: 'icon-sun.svg',
  action: 'action.svg',
  chevronDown: 'chevron_down.svg',
  chevronLeft: 'chevron-left.svg',
  trash: 'trash.svg',
  happyEmoji: 'happy_emoji.svg',
  edit: 'edit.svg',
  hamburger: 'icon-hamburger.svg',
  close: 'icon-close.svg',
  filter: 'filter.svg',
  cart: 'cart.svg',
  hero: 'hero.jpeg',
  fitness: 'fitness_tracker.jpeg',
  jbl: 'jbl.jpeg',
  ultra: 'ultraHd.jpeg',
  backpack: 'backpack.jpg',
  cannon: 'cannon.jpg',
  furniture: 'furniture.jpg',
  home: 'home.jpg'
};

export const pageTitles = {
  home: 'TrendLoom',
  login: 'TrendLoom | Login',
  signup: 'TrendLoom | Signup'
};

export const validationMessages: Record<string, Record<string, string>> = {
  name: {
    required: 'Name is required.',
    invalidName: 'Must contain only alphabets.'
  },
  email: {
    required: 'Email is required.',
    invalidEmail: 'Invalid email format.'
  },
  password: {
    required: 'Password is required.',
    invalidPassword: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
  },
  confirmPassword: {
    required: 'Confirm password is required.',
    passwordMismatch: 'Passwords do not match.'
  }
};
