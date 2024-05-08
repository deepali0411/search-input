import react from 'react';

const HighlightedText = ({text, search, className}) => {
  
    if(!search.trim()) return <div className={className}>{text}</div>

    const regex = new RegExp(`(${search})`, 'gi');
    const parts = text.split(regex);

    return (
        <div className={className}>
          {parts.map((part, index) => (
                 part.toLowerCase() === search.toLowerCase() ? (
                    <span key={index} style={{ color: "#0069c2" }}>
                      {part}
                    </span>
                  ) : (
                    <span key={index}>{part}</span>
                  )
          ))}
        </div>

    )
};
export default HighlightedText;