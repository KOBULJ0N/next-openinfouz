# **next.openinfouz Documentation**

## **0. Tools Used**

### Frameworks & Libraries

1. **Vue.js**

   - Framework for building user interfaces.
   - Utilizes the **Composition API** for reusable, scalable components.

2. **Vue I18n**

   - Internationalization plugin for translations.

3. **Element Plus**

   - UI library for Vue 3 with prebuilt components.

4. **Tailwind CSS**

   - Utility-first CSS framework for modern, responsive designs.

5. **Lightweight Charts**

   - Fast and flexible library for financial charts.

6. **ECharts**

   - Rich charting library for interactive visualizations.

7. **Vite**
   - Modern build tool for fast development and optimized production builds.

---

## **1. Project Architecture**

The project follows a **feature-based architecture** for scalability and maintainability.

### **Folder Structure**

---

src/
│── assets/ # Static assets: images, fonts, icons
│ ├── images/
│ ├── fonts/
│ └── icons/
│
│── components/ # Reusable UI components
│ ├── common/ # Global components (buttons, modals, etc.)
│ │ ├── BaseButton.vue
│ │ └── BaseModal.vue
│ ├── layouts/ # Components used in layouts
│ │ └── Header.vue
│ └── widgets/ # Feature-related components
│ ├── StatisticsWidget.vue
│ └── NewsWidget.vue
│
│── features/ # Feature-based modular structure
│ ├── News/ # News feature module
│ │ ├── components/ # Feature-specific components
│ │ │ ├── NewsList.vue
│ │ │ └── NewsItem.vue
│ │ ├── services/ # API calls specific to this feature
│ │ │ └── newsService.js
│ │ ├── store/ # Local state management (Pinia/Vuex)
│ │ │ └── newsStore.js
│ │ └── index.vue # Main feature view
│ └── Statistics/
│ ├── components/
│ ├── services/
│ ├── store/
│ └── index.vue
│
│── composables/ # Reusable logic (Composition API)
│ ├── useFetchData.js
│ └── useAuth.js
│
│── http/ # API configurations and interceptors
│ └── axiosInstance.js
│
│── i18n/ # Internationalization (translations)
│ ├── en.json # English
│ ├── uz.json # Uzbek
│ └── index.js
│
│── layout/ # Layout-specific files (app layouts)
│ ├── DefaultLayout.vue
│ └── AuthLayout.vue
│
│── router/ # Routing configurations
│ └── index.js
│
│── store/ # Global state management
│ └── index.js
│
│── styles/ # Global styles
│ ├── main.css # Main Tailwind or global CSS
│ └── variables.css # CSS variables
│
│── views/ # High-level page views
│ ├── HomeView.vue
│ ├── LoginView.vue
│ └── DashboardView.vue
│
│── App.vue # Root component
└── main.js # Application entry point

## **2. How to Use Translations**

### **Tools**

- `vue-i18n` for translations.

### **Folder Structure**

```plaintext
src/
└── i18n/
    ├── en.json       # English translations
    ├── uz.json       # Uzbek translations
    └── index.ts      # i18n configuration
```

### **Setup Instructions**

1. **Create Translation Files**

   - Example `en.json`:
     ```json
     {
       "welcome": "Welcome to Next OpenInfoUz",
       "login": "Login"
     }
     ```
   - Example `uz.json`:
     ```json
     {
       "welcome": "Next OpenInfoUz'ga Xush Kelibsiz",
       "login": "Kirish"
     }
     ```

2. **Configure i18n**

   ```ts
   import { createI18n } from 'vue-i18n';
   import en from './en.json';
   import uz from './uz.json';

   const i18n = createI18n({
     locale: 'en',
     fallbackLocale: 'en',
     messages: { en, uz },
   });

   export default i18n;
   ```

3. **Use Translations**
   ```vue
   <template>
     <h1>{{ $t('welcome') }}</h1>
   </template>
   ```

---

## **3. How to Use Theming**

### **Tools**

- Tailwind CSS

### **Steps**

1. **Extend Tailwind Configuration**:
   Update `tailwind.config.js`:

   ```js
   module.exports = {
     darkMode: 'class',
     theme: {
       extend: {
         colors: {
           primary: '#1E3A8A',
           secondary: '#9333EA',
         },
       },
     },
   };
   ```

2. **Dark Mode Toggle**

   ```vue
   <template>
     <button @click="toggleTheme">Switch Theme</button>
   </template>

   <script setup>
   const toggleTheme = () => {
     document.documentElement.classList.toggle('dark');
   };
   </script>
   ```

---

## **4. Deployment and Running with Vite**

### **Run in Development**

To run the project locally for development:

```bash
npm install
npm run dev
```

- This starts a development server and opens the app at `http://localhost:5173`.

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### **Build for Production**

To generate an optimized production build:

```bash
npm run build
```

- The output will be in the `dist/` directory.

### **Deploy to Test/Production Server**

1. Build the project:

   ```bash
   npm run build
   ```

2. Copy the `dist/` folder to your server (via FTP, SCP, or CI/CD tools):

   ```bash
   scp -r dist/* user@server:/path/to/project
   ```

3. Serve the `dist/` folder using a static file server (e.g., Nginx, Apache, or Node).

### **Preview Production Build Locally**

To test the production build locally:

```bash
npm run preview
```

- This serves the `dist/` folder at `http://localhost:4173`.

---

## **5. Creating a New Repository and Adding Users**

### Steps

1. **Create a Repository** on GitHub/GitLab.
2. **Push Local Code**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <repo-url>
   git push -u origin main
   ```
3. **Add Users**:
   - Go to **Settings** → **Collaborators**.
   - Add user emails or usernames and assign roles.

---

## **Conclusion**

This documentation provides detailed information on tools, architecture, translations, theming, and Vite-based deployment and running instructions.
