import React, {useMemo} from 'react';

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if(sort){
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        }
        return posts;
    }, [posts, sort]);

    return sortedPosts;
};

export const usePosts = (posts, sort, query) => {
    const filteredPosts = useSortedPosts(posts, sort)

    const sortedAndSearchedPosts = useMemo(() => {
        return filteredPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
    }, [filteredPosts, query])

    return sortedAndSearchedPosts;
}