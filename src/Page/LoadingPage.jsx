import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const LoadingPage = () => {
    return (
        <div className='min-h-screen'>

<Skeleton /> 
<Skeleton count={30} />

        </div>
    );
};

export default LoadingPage;