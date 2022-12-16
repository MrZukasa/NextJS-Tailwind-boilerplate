# NextJS 13 + Tailwind 🍰

- Progetto creato con `yarn create next-app nextjs-tailwind`
- Installato Tailwind con `yarn add -D tailwindcss postcss autoprefixer` e `npx tailwindcss init -p`
- Aggiunto contenuto al file [tailwind.config.js](tailwind.config.js)

  ```js
    /** @type {import('tailwindcss').Config} */
    module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    }
  ```

- Aggiunto contenuto al [globals.css](styles/globals.css)

  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  html {
    scroll-behavior: smooth;
  }
  ```

- Per quanto riguarda il BG ho preso una foto da unsplash e l'ho dichiarata come classe nel [globals.css](styles/globals.css) come `.custom-img` e l'ho legata all'URL dell'immagine.

- Dentro il componente [hero.jsx](components/hero.jsx) ho passato due props come argomenti del componente: `heading` e `message`, prendo queste props e le visualizzo.
Dove definisco il contenuto di queste props è dentro il tag `<Hero />`, quindi mettendo dentro i tags `heading=qualcosa` e `message=qualcosa`, passo queste info come props.

- Una volta aggiunta la `Navbar` dentro [_app.js](pages/_app.js) posso installare `yarn add react-icons` che servono per aggiungere dei bottoni per mobile

- Ricordarsi che esiste l'inline Styling e si fa con `style={{}}` e caso in cui si debba passare una props si fa:

  ```js
  style={{ backgroundColor: `${nomedellousestate}`}}
  ```
