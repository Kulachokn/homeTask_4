import React from "react";
import CastListItem from "./CastListItem";

export default function CastList({cast}) {
    return (
        <ul>
            {cast.map(({id, name, profile_path, character}) => (
                <CastListItem
                    key={id}
                    name={name}
                    profile_path={profile_path}
                    character={character}
                />
            ))}
        </ul>
    )
}