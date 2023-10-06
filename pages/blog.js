import React from "react";
/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/blogs/")
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        setBlogs(parsed);
      });
  }, []);
  return (
    <>
      <div className={styles.container}>
        <main>
          {blogs.map((blogItem) => {
            return (
              <div key={blogItem.slug} className={styles.main}>
                <Link href={`/blogpost/${blogItem.slug}`}>
                  <a>
                    <h3>{blogItem.title}</h3>
                  </a>
                </Link>
                <p className={styles.blogItemP}>
                  {blogItem.content.substr(0, 400)}
                </p>
              </div>
            );
          })}
        </main>
      </div>
    </>
  );
};

export default Blog;
