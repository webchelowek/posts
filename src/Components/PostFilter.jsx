import React from 'react';
import MyInput from "../UI/MyInput/MyInput";
import Filter from "./Filter";

const PostFilter = ({filter, setFilter}) => {

    return (
        <div>
            <MyInput
                placeholder="Search..."
                value={filter.query}
                onChange={(e) => setFilter({...filter, query: e.target.value})}
            />
            <Filter
                defaultValue="Sort by"
                options={[
                    {value: 'title', name:"Title"},
                    {value: 'body', name:"Body"}
                ]}
                value={filter.sort}
                setFilter={e => {
                    setFilter({...filter, sort: e.target.value})
                }}
            />
        </div>
    );
};

export default PostFilter;