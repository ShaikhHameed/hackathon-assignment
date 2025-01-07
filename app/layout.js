// import 'bootstrap/dist/css/bootstrap.min.css';
import AuthorizationProvider from './components/AuthorizationProvide';
import Navbar from './components/components/navbar';
import './style.css';


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthorizationProvider>
        {children}
        </AuthorizationProvider>
      </body>
    </html>
  );
}
