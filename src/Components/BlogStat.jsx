import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

const BlogStats = () => {
  const [inView, setInView] = useState(false); 
  const statsRef = useRef(null); 
  const handleIntersection = (entries, observer) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      setInView(true); 
      observer.unobserve(entry.target); 
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, 
    });

    if (statsRef.current) {
      observer.observe(statsRef.current); 
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current); 
      }
    };
  }, []);

  return (
    <div className="bg-[#f5f5f5] py-10 text-center text-[#4a4a4a]" ref={statsRef}>
      <h2 className="text-2xl font-bold mb-6">Our Community's Impact</h2>
      <div className="flex justify-center gap-10">
        <div>
          <h3 className="text-4xl font-bold">
            {inView ? <CountUp start={0} end={1200} duration={3} /> : 0}
          </h3>
          <p className="text-lg mt-2">Blogs Published</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">
            {inView ? <CountUp start={0} end={500} duration={3} /> : 0}
          </h3>
          <p className="text-lg mt-2">Active Authors</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">
            {inView ? <CountUp start={0} end={15000} duration={3} /> : 0}
          </h3>
          <p className="text-lg mt-2">Comments Posted</p>
        </div>
      </div>
    </div>
  );
};

export default BlogStats;
