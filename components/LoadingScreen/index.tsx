import { useState, useEffect, FC } from 'react';
import styles from './LoadingScreen.module.css';

// Mendefinisikan tipe untuk props komponen
type LoadingScreenProps = {
  onFinished: () => void;
};

const LoadingScreen: FC<LoadingScreenProps> = ({ onFinished }) => {
  const [isSlidingUp, setIsSlidingUp] = useState<boolean>(false);
  const [textIsVisible, setTextIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Memicu transisi teks setelah komponen dimuat
    const textTimer = setTimeout(() => {
      setTextIsVisible(true);
    }, 100);

    // Memicu animasi slide-up setelah 2 detik
    const slideUpTimer = setTimeout(() => {
      setIsSlidingUp(true);
    }, 2000);

    // Menghapus komponen setelah animasi selesai
    const finishTimer = setTimeout(() => {
      onFinished();
    }, 2800); // 2s jeda + 0.8s durasi animasi

    // Cleanup function untuk membersihkan semua timer
    return () => {
      clearTimeout(textTimer);
      clearTimeout(slideUpTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinished]);

  // Menggabungkan class untuk overlay
  const overlayClasses: string = `${styles.loadingOverlay} ${isSlidingUp ? styles.slideUp : ''}`;
  
  // Menggabungkan class untuk teks
  const textClasses: string = `${styles.loadingText} ${textIsVisible ? styles.visible : ''}`;

  return (
    <div className={overlayClasses}>
      <div className={styles.loadingContainer}>
        <h1 className={`${textClasses} font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl`}>
          akanoma
        </h1>
      </div>
    </div>
  );
};

export default LoadingScreen;
