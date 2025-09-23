import Nav from './Nav';

export default function Layout({ children, theme, setTheme }) {
  return (
    <div className="min-h-screen">
      <Nav theme={theme} setTheme={setTheme} />
      <main className="container mx-auto p-6">
        {children}
      </main>
    </div>
  );
}
