// import React, { useEffect, useState } from 'react';

// const Styler = ({ isHighlighted }) => {
//   const [style, setStyle] = useState({});

//   useEffect(() => {
//     if (isHighlighted) {
//       setStyle({ backgroundColor: 'yellow', padding: '10px' });
//     } else {
//       setStyle({ backgroundColor: 'white', padding: '10px' });
//     }
//   }, [isHighlighted]);

//   return (
//     <div style={style}>
//       <p>Styler Component</p>
//     </div>
//   );
// };

// export default Styler;
import React, { useEffect, useState } from 'react';

const Styler = ({ isHighlighted, children }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    if (isHighlighted) {
      setStyle({ backgroundColor: 'yellow', fontWeight: 'bold' });
    } else {
      setStyle({ backgroundColor: 'white', fontWeight: 'normal' });
    }
  }, [isHighlighted]);

  return (
    <div style={style}>
      {children}
    </div>
  );
};

export default Styler;