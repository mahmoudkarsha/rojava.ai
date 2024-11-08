import React, { useEffect, useRef, useState } from "react";

const LazyLoad = ({ children, threshold = 0.1, style = {} }) => {
      const [isVisible, setIsVisible] = useState(false);
      const ref = useRef(null);

      useEffect(() => {
            const observer = new IntersectionObserver(
                  ([entry]) => {
                        if (entry.isIntersecting) {
                              setIsVisible(true);
                              observer.unobserve(ref.current);
                        }
                  },
                  { threshold }
            );

            if (ref.current) {
                  observer.observe(ref.current);
            }

            return () => {
                  if (ref.current) {
                        observer.unobserve(ref.current);
                  }
            };
      }, [threshold]);

      return (
            <div style={style} ref={ref}>
                  {isVisible ? children : null}
            </div>
      );
};

export default LazyLoad;
