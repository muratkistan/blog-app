import React from 'react';
import styles from './page.module.css'

const BlogPost = ({params}) => {
    return (
        <div className={styles.container}>
            BlogPost {params.id}
        </div>
    );
};

export default BlogPost;