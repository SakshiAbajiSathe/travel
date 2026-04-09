import React from 'react';

const StepItem = ({ icon, title, description, iconBgColor }) => {
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '20px',
      marginBottom: '30px',
      maxWidth: '400px',
    },
    iconBox: {
      width: '48px',
      height: '48px',
      minWidth: '48px',
      borderRadius: '13px',
      backgroundColor: iconBgColor,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '20px',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
    },
    title: {
      fontSize: '16px',
      fontWeight: '700',
      color: '#5E6282',
      margin: 0,
    },
    description: {
      fontSize: '16px',
      fontWeight: '400',
      color: '#5E6282',
      lineHeight: '124.5%',
      margin: 0,
      opacity: 0.8,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.iconBox}>
        {icon}
      </div>
      <div style={styles.content}>
        <h4 style={styles.title}>{title}</h4>
        <p style={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default StepItem;
