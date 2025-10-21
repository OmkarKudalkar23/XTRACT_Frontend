import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Door.css';
// import axios from 'axios'; // Will be used for actual API calls

const Door = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [doorStatuses, setDoorStatuses] = useState({
    track1: 'closed',
    track2: 'closed',
    track3: 'closed',
    track4: 'closed'
  });

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const doors = [
    {
      id: 1,
      doorImage: '/assets/images/door1.png',
      hangerImage: '/assets/images/anabelle-door1.png',
      name: 'Anabelle'
    },
    {
      id: 2,
      doorImage: '/assets/images/door2.png',
      hangerImage: '/assets/images/valak-door2.png',
      name: 'Valak'
    },
    {
      id: 3,
      doorImage: '/assets/images/door3.png',
      hangerImage: '/assets/images/crookedman-door3.png',
      name: 'Crooked Man'
    },
    {
      id: 4,
      doorImage: '/assets/images/door4.png',
      hangerImage: '/assets/images/bathshebasherman-door4.png',
      name: 'Bathsheba Sherman'
    }
  ];

  // Detect mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Fetch door statuses from API (hardcoded for now)
  useEffect(() => {
    // Simulating API call with hardcoded response
    const fetchDoorStatuses = () => {
      // This will be replaced with: axios.get('YOUR_API_ENDPOINT')
      const apiResponse = {
        "status": "success",
        "data": {
          "track1": "closed",
          "track2": "open",
          "track3": "closed",
          "track4": "closed"
        }
      };

      if (apiResponse.status === 'success') {
        setDoorStatuses(apiResponse.data);
      }
    };

    fetchDoorStatuses();
  }, []);

  const handleNextPage = () => {
    if (currentPage < 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Touch handlers for swipe navigation
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe && currentPage < 1) {
      handleNextPage();
    }
    if (isRightSwipe && currentPage > 0) {
      handlePrevPage();
    }
  };

  // Filter doors based on current page (mobile only)
  const getDisplayedDoors = () => {
    if (!isMobile) {
      return doors;
    }
    const startIndex = currentPage * 2;
    return doors.slice(startIndex, startIndex + 2);
  };

  const displayedDoors = getDisplayedDoors();

  // Handle door click
  const handleDoorClick = (doorId, isLocked) => {
    if (isLocked) {
      alert('This track is locked! Complete the previous tracks first.');
      return;
    }
    navigate(`/track/${doorId}`);
  };

  return (
    <div 
      className="door-container"
      onTouchStart={isMobile ? onTouchStart : undefined}
      onTouchMove={isMobile ? onTouchMove : undefined}
      onTouchEnd={isMobile ? onTouchEnd : undefined}
    >
      {/* Background */}
      <div className="background-image"></div>

      {/* Mobile Title - Only visible on mobile */}
      {isMobile && (
        <h1 className="mobile-title">CHOOSE OUT OF THE FOUR TRACKS</h1>
      )}

      {/* Clock - Top Right */}
      <img 
        src="/assets/images/clock-right-top.png" 
        alt="Clock" 
        className="clock"
      />

      {/* Shadow below door 1 */}
      <img 
        src="/assets/images/shadow-below-door-1.png" 
        alt="Shadow" 
        className="shadow-door1"
      />

      {/* Cross chain in front of door 2 */}
      <img 
        src="/assets/images/cross-chain-infront-of-door2.png" 
        alt="Cross Chain" 
        className="cross-chain"
      />

      {/* Blood mark - Bottom Right */}
      <img 
        src="/assets/images/red-paint-spilled-bottom-right.png" 
        alt="Blood" 
        className="blood-mark"
      />

      {/* Doors Container */}
      <div className="doors-wrapper">
        {displayedDoors.map((door) => {
          const trackKey = `track${door.id}`;
          const isLocked = doorStatuses[trackKey] === 'closed';
          
          return (
            <div 
              key={door.id} 
              className={`door-item door-${door.id} ${isLocked ? 'locked' : ''}`}
              onClick={() => handleDoorClick(door.id, isLocked)}
              style={{ cursor: isLocked ? 'not-allowed' : 'pointer' }}
            >
              {/* Door Image */}
              <img 
                src={door.doorImage} 
                alt={`Door ${door.id}`} 
                className="door-image"
              />
              
              {/* Hanger with Name */}
              <img 
                src={door.hangerImage} 
                alt={door.name} 
                className="hanger-image"
              />

              {/* Lock - Show if door status is "closed" */}
              {isLocked && (
                <img 
                  src="/assets/images/lock.png" 
                  alt="Locked" 
                  className="lock-image"
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile Pagination Controls */}
      {isMobile && (
        <div className="mobile-pagination">
          <button 
            className="pagination-btn prev"
            onClick={handlePrevPage}
            disabled={currentPage === 0}
          >
            ←
          </button>
          <div className="pagination-dots">
            <span className={`dot ${currentPage === 0 ? 'active' : ''}`}></span>
            <span className={`dot ${currentPage === 1 ? 'active' : ''}`}></span>
          </div>
          <button 
            className="pagination-btn next"
            onClick={handleNextPage}
            disabled={currentPage === 1}
          >
            →
          </button>
        </div>
      )}
    </div>
  );
};

export default Door;
