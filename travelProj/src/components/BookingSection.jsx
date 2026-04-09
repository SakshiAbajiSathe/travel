import React from 'react';
import StepItem from './StepItem';
import TripCard from './TripCard';

const BookingSection = () => {
  const styles = {
    section: {
      fontFamily: "'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      padding: '80px 4% 120px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      minHeight: '100vh',
    },
    container: {
      display: 'flex',
      maxWidth: '1200px',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '60px',
    },
    leftContent: {
      flex: '1',
      maxWidth: '600px',
    },
    subtitle: {
      color: '#5E6282',
      fontSize: '18px',
      fontWeight: '600',
      textTransform: 'uppercase',
      marginBottom: '15px',
      display: 'block',
    },
    heading: {
      color: '#181E4B',
      fontFamily: "'Volkhov', serif",
      fontSize: '50px',
      fontWeight: '700',
      lineHeight: '1.2',
      marginBottom: '50px',
      marginTop: '0',
    },
    stepsList: {
      display: 'flex',
      flexDirection: 'column',
    },
    rightContent: {
      flex: '1',
      display: 'flex',
      justifyContent: 'flex-end',
      paddingRight: '120px', 
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
       
        <div style={styles.leftContent}>
          <span style={styles.subtitle}>Easy and Fast</span>
          <h1 style={styles.heading}>Book Your Next Trip In 3 Easy Steps</h1>
          
          <div style={styles.stepsList}>
            <StepItem 
              icon="📍"
              title="Choose Destination"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
              iconBgColor="#F0BB1F"
            />
            <StepItem 
              icon="💳"
              title="Make Payment"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
              iconBgColor="#F15A2B"
            />
            <StepItem 
              icon="✈️"
              title="Reach Airport on Selected Date"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
              iconBgColor="#006380"
            />
          </div>
        </div>

      
        <div style={styles.rightContent}>
          <TripCard />
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
