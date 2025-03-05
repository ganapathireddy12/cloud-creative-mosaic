
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-24">
        <h1 className="text-6xl font-display font-bold mb-4">404</h1>
        <div className="w-16 h-1 bg-blue-500 mb-8"></div>
        <p className="text-xl text-gray-600 mb-8 max-w-md text-center">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a 
          href="/" 
          className="button-hover inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-white font-medium"
        >
          Back to Home
        </a>
      </div>
    </Layout>
  );
};

export default NotFound;
