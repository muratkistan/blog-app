import React from 'react';

const BlogPost = ({params}) => {
    return (
        <div>
            BlogPost {params.id}
        </div>
    );
};

export default BlogPost;