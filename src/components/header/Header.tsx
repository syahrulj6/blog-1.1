'use client';

import Image from 'next/image';
import styles from './header.module.css';
import { useState } from 'react';
import { searchPostsByTitle } from '@/lib/actions';
import { Post } from '@/lib/types';
import Link from 'next/link';

const Header = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [query, setQuery] = useState('');
  const [searchResult, setSearchResult] = useState<Post[]>([]);

  const handleSearch = async () => {
    try {
      const res = await searchPostsByTitle(query);
      setSearchResult(res);
    } catch (error) {
      console.log('Failed to search post', error);
    }
  };

  const handleClose = () => {
    setIsSearch(false);
    setQuery('');
    setSearchResult([]);
  };

  return (
    <>
      {isSearch && (
        <div className={styles.searchContainer} id="search">
          <div className={styles.heading}>
            <h2 className={styles.headingTitle}>Search</h2>
            <button className={styles.headingBtn} onClick={handleClose}>
              <Image src={'/close.png'} alt="close" fill />
            </button>
          </div>
          <div className={styles.inputContainer}>
            <input type="text" className={styles.input} onChange={(e) => setQuery(e.target.value)} value={query} />
            <button className={styles.inputBtn} onClick={handleSearch}>
              Search
            </button>
          </div>
          <h2 className={styles.listHeading}>Search Result</h2>
          <div className={styles.listContainer}>
            {searchResult.map((post) => (
              <Link href={`/${post.slug}`} key={post._id} className={styles.listTitle}>
                {post.title}
              </Link>
            ))}
          </div>
        </div>
      )}
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Image src={'/logo.png'} alt="logo" fill />
        </div>
        <button className={styles.searchBtn} onClick={() => setIsSearch(true)}>
          <Image src={'/search.png'} alt="search" fill />
        </button>
        {/* <button onClick={handleScroll}>test</button> */}
      </div>
    </>
  );
};

export default Header;
