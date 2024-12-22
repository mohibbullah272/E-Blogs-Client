import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div 
            className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-200 to-gray-200"
        >
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-8">Oops! The page you're looking for doesn't exist.</p>
            <Link 
                to="/"
                className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-all"
            >
                Go to Home
            </Link>
        </div>
    );
};

export default ErrorPage;
