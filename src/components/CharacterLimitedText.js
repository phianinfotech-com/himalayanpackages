import React from 'react';

function CharacterLimitedText({ text, limit }) {
  if (text.length <= limit) {
    return {text};
  }

  const truncatedText = text.substring(0, limit) + '...';

  return <p>{truncatedText}</p>;
}

export default CharacterLimitedText;
