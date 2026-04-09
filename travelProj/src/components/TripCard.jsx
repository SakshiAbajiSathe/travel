import React from 'react';
import img1 from '../assets/img1.png';
import maskGroup from '../assets/Mask Group.png';

const TripCard = () => {
  const styles = {
    card: {
      width: '370px',
      backgroundColor: '#FFFFFF',
      borderRadius: '26px',
      padding: '20px 25px 30px',
      boxShadow: '0px 100px 80px rgba(0, 0, 0, 0.02), 0px 64.8px 46.8px rgba(0, 0, 0, 0.015), 0px 38.5px 25.5px rgba(0, 0, 0, 0.012), 0px 20px 13px rgba(0, 0, 0, 0.01), 0px 8.1px 6.5px rgba(0, 0, 0, 0.008), 0px 1.9px 3.1px rgba(0, 0, 0, 0.005)',
      position: 'relative',
      zIndex: 1,
    },
    image: {
      width: '100%',
      height: '161px',
      borderRadius: '24px',
      objectFit: 'cover',
      marginBottom: '26px',
    },
    title: {
      fontSize: '18px',
      fontWeight: '700',
      color: '#080809',
      margin: '0 0 13px 0',
      letterSpacing: '0.015em',
    },
    infoText: {
      fontSize: '16px',
      fontWeight: '500',
      color: '#84829A',
      margin: '0 0 21px 0',
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
    },
    iconsRow: {
      display: 'flex',
      gap: '18px',
      marginBottom: '30px',
    },
    iconCircle: {
      width: '36px',
      height: '36px',
      backgroundColor: '#F5F5F5',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '14px',
      color: '#5E6282',
    },
    bottomRow: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    people: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      fontSize: '16px',
      fontWeight: '500',
      color: '#84829A',
    },
    heartIcon: {
      fontSize: '20px',
      color: '#4152CA',
    },
    // Overlay Rome Card
    overlayCard: {
      position: 'absolute',
      width: '263px',
      backgroundColor: '#FFFFFF',
      borderRadius: '18px',
      padding: '16px 20px',
      bottom: '15%',
      right: '-110px',
      boxShadow: '0px 100px 80px rgba(0, 0, 0, 0.02), 0px 64.8px 46.8px rgba(0, 0, 0, 0.015), 0px 38.5px 25.5px rgba(0, 0, 0, 0.012), 0px 20px 13px rgba(0, 0, 0, 0.01), 0px 8.1px 6.5px rgba(0, 0, 0, 0.008), 0px 1.9px 3.1px rgba(0, 0, 0, 0.005)',
      display: 'flex',
      gap: '12px',
      zIndex: 2,
    },
    overlayImage: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      objectFit: 'cover',
    },
    overlayContent: {
      flex: 1,
    },
    ongoing: {
      fontSize: '14px',
      fontWeight: '500',
      color: '#84829A',
      margin: '0 0 6px 0',
    },
    romeTitle: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#080809',
      margin: '0 0 14px 0',
    },
    progressPercent: {
      fontSize: '14px',
      fontWeight: '500',
      color: '#080809',
      margin: '0 0 10px 0',
    },
    progressBarContainer: {
      width: '100%',
      height: '5px',
      backgroundColor: '#F5F5F5',
      borderRadius: '30px',
      overflow: 'hidden',
    },
    progressBar: {
      width: '40%',
      height: '100%',
      backgroundColor: '#8A79DF',
      borderRadius: '30px',
    },
  };

  return (
    <div style={{ position: 'relative' }}>
      <div style={styles.card}>
        <img
          src={img1}
          alt="Trip to Greece"
          style={styles.image}
        />
        <h3 style={styles.title}>Trip To Greece</h3>
        <p style={styles.infoText}>14-29 June | by Robbin joseph</p>

        <div style={styles.iconsRow}>
          <div style={styles.iconCircle}>🌿</div>
          <div style={styles.iconCircle}>🗺️</div>
          <div style={styles.iconCircle}>📡</div>
        </div>

        <div style={styles.bottomRow}>
          <div style={styles.people}>
            🏢 <span>24 people going</span>
          </div>
          <div style={styles.heartIcon}>❤️</div>
        </div>
      </div>

      
      <div style={styles.overlayCard}>
        <img
          src={maskGroup}
          alt="Trip to Rome"
          style={styles.overlayImage}
        />
        <div style={styles.overlayContent}>
          <p style={styles.ongoing}>Ongoing</p>
          <h4 style={styles.romeTitle}>Trip to rome</h4>
          <p style={styles.progressPercent}>
            <span style={{ color: '#8A79DF' }}>40%</span> completed
          </p>
          <div style={styles.progressBarContainer}>
            <div style={styles.progressBar}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
