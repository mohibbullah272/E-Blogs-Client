import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const LoadingPage = () => {
    return (
        <div>

<Skeleton /> 
<Skeleton count={10} />

        </div>
    );
};

export default LoadingPage;