// create react app with vite
- npm create vite@latest react-map-tailwind-typescript -- --template react
- npm install

// install tailwindcss
- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p
- copy <<content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],>> in tailwind.config.js
- copy @tailwind base; @tailwind components; @tailwind utilities; in index.css

// commands