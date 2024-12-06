"use client";


import React from 'react';
import styles from '@/styles/iconography.module.css';
import CavingIcon from '@/components/reticulatables/CavingGuyIcon';

export default function CavingGuy() {
  // Debugging log
  console.log('========= styles:', styles);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.iconWrapper}>
          <CavingIcon
            className="caving-icon"
            style={{ fill: "red", width: "100px", height: "100px" }}
          />
        </div>
      </div>
    </>
  );
};
