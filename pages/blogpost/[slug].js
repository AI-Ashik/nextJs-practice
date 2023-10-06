import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>Title of the Page is : {slug}</h1>
        <hr />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          sapiente.
        </div>
      </div>
    </div>
  );
};

export default Slug;
