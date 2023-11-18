"use client";

import { useEffect, useState } from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import styles from "./background.module.css";

export default function Background() {
  const [segment, setSegment] = useState<string | null>(null);
  const selectedLayoutSegment = useSelectedLayoutSegment();

  useEffect(() => {
    try {
      setSegment(selectedLayoutSegment);
    } catch (e) {
      // this is for /welcome which is still on /pages router
    }
  }, [selectedLayoutSegment]);

  return !segment ? (
    <div className={styles.main}>
      <div className={styles.content} />
    </div>
  ) : null;
}
