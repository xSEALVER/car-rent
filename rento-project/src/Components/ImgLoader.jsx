import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import video from '../assets/LogoutVideo.mp4';

const ImgLoader = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Wait for 3 seconds, then redirect to the homepage
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);

    // Cleanup timer in case the component unmounts before the timer ends
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <video autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default ImgLoader;
