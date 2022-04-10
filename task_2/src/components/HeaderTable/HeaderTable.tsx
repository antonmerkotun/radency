import React from 'react';
import './HeaderTable.css'

interface categoryList {
    category: any[]
}

export default function HeaderTable({category}: categoryList): JSX.Element {
    return (
        <div className="header_list">
            {category.map((item, index) => {
                return <div key={index}>{item.name} {item.icon && item.icon}</div>
            })}
        </div>
    );
}
