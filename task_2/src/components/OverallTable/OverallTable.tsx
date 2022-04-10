import React from 'react';
import "./OverallTable.css"

export default function OverallTable({category}: any): JSX.Element {
    return (
        <>
            {category && category.map((element: any, index: number) => {
                return <div className="list-all" key={index}>
                    <li>{element.name}</li>
                    <li>{element.activeTask.filter((e: any) => e.category === element.name).length}</li>
                    <li>{element.archiveTask.filter((e: any) => e.category === element.name).length}</li>
                </div>
            })}
        </>
    );
}
