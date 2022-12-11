/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { FiWifiOff, FiWifi } from 'react-icons/fi';

const Alert = ({ isOnline }) => {
  const [showAlert, setShowAlert] = React.useState(false);

  React.useEffect(() => {
    let isMounted = true;

    if (isOnline && showAlert && isMounted) {
      setShowAlert(true);

      setTimeout(() => {
        if (isMounted) {
          setShowAlert(false);
        }
      }, 3000);
    }

    if (!isOnline && isMounted) {
      setShowAlert(true);
    }

    return () => {
      isMounted = false;
    };
  }, [isOnline]);

  return (
    <div style={{ fontFamily: `sans-serif` }}>
      {showAlert && (
        <div className="position-absolute rounded-3 shadow top-50 start-50 translate-middle" style={{ zIndex: 10000, color: 'white', padding: 20, marginBottom: 20, background: isOnline ? `rgb(59, 201, 149)` : `#ff5733` }}>
          {isOnline ? (
            <p className="text-center">
              <span>
                <FiWifi className="d-block mx-auto mb-3" size={50} />
              </span>
              You are online
            </p>
          ) : (
            <p className="text-center">
              <span>
                <FiWifiOff className="d-block mx-auto mb-3" size={50} />
              </span>
              You are offline please check your connection
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Alert;
