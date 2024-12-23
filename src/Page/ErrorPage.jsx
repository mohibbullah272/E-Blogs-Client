import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div 
            className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-stone-500 to-gray-500"
        >
            <h1 className="text-6xl font-bold text-gray-200 mb-4">404</h1>
            <p className="text-xl text-gray-200 mb-8">Oops! The page you're looking for doesn't exist.</p>
            <Link 
                to="/"
                className="px-6 py-3 bg-stone-600-500 text-white rounded-lg shadow-md hover:bg-gray-600 transition-all"
            >
                Go to Home
            </Link>
        </div>
    );
};

export default ErrorPage;
