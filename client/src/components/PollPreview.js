"use client";
import Link from "next/link";
import styles from "./PollPreview.module.css";

/* #1a TODO: Add title, totalVotes, and ownerId to the props list*/
export default function PollPreview({ link, title, totalVotes, ownerId }) {
  return (
    <Link href={link} className={styles.PollLink}>
      <div className={styles.infoContainer}>
        {/* #1b TODO: In the line below, add an expression containing the title between the h2 tags*/}
        <h2 className={styles.pollTitle}>The title is: {title}</h2>
        <p>Votes: {totalVotes}</p>
      </div>
      <p className={styles.ownerId}>Owner Id: {ownerId}</p>
      {/* #1d TODO: On a new line, add a <p> tag containing the ownerId to the component*/}
    </Link>
  );
}
