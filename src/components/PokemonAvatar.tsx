import React from "react";

type PokemonAvatarProps = {
  avatar: string;
  name: string;
}

const PokemonAvatar: React.FC<PokemonAvatarProps> = ({ avatar, name }) => {
  return (
    <img src={avatar} alt={name} className="rounded-full w-32 my-0 mx-auto" />
  );
}

export default PokemonAvatar;