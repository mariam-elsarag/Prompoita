import Provider from "@components/layout/Provider";
import Nav from "@components/layout/Nav";
import "@styles/globals.css";

export const metadata = {
  title: "Promptopia",
  description: "Discover & share AI Prompts",
  icons: {
    icon: "/assets/images/logo.svg",
  },
};
const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default layout;
