import React, { useState } from 'react';
import './Door.css';

const Door = () => {
  const [selectedDoorId, setSelectedDoorId] = useState(null);

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

  const handleDoorClick = (doorId) => {
    setSelectedDoorId(doorId);
  };

  return (
    <div className="door-container">
      {/* Background */}
      <div className="background-image"></div>

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
        {doors.map((door) => {
          const isLocked = selectedDoorId !== null && selectedDoorId !== door.id;
          
          return (
            <div 
              key={door.id} 
              className={`door-item door-${door.id} ${isLocked ? 'locked' : ''}`}
              onClick={!isLocked ? () => handleDoorClick(door.id) : undefined}
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

              {/* Lock - Show on other doors when one is selected */}
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
    </div>
  );
};

export default Door;
