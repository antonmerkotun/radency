import React from 'react';

type IconUrlProps = {
    url: string
    id?: string | undefined
}


export default function Icon({url, id}: IconUrlProps): JSX.Element {
    return (
        <img id={id} src={url} height="30px" width="30px" alt="icon-archive"/>
    )
}