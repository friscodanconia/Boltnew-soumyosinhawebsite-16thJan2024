import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
        <Header />
        <div className="flex-1 p-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Hello! This is a test page</h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300">If you can see this, the basic React setup is working.</p>
        </div>
      </div>
    </Router>
  );
}
