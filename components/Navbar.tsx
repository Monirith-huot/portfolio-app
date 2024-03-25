'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();

  const path = usePathname();

  const parts = path.split('/').filter((part) => part !== '');

  // Function to transform part into readable format
  const transformPart = (part: any) => {
    // Replace hyphens with spaces
    return part.replace(/-/g, ' ');
  };

  console.log(parts);

  return (
    <nav className='section'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex items-center flex-row'>
          <Link href='/' className='text-sm'>
            Home
          </Link>

          {parts.length > 0 && (
            <span className='mx-2 text-muted-foreground'>{'>'}</span>
          )}
          {parts.map((part, index) => (
            <span key={index} className='text-sm text-muted-foreground'>
              {transformPart(part)}
              {index !== parts.length - 1 && (
                <span className='mx-2'>{'>'}</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// 'use client';

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// const Navbar = () => {
//   const path = usePathname();

//   // Split the path into parts
//   const parts = path.split('/').filter((part) => part !== '');

//   // Function to transform part into readable format
//   const transformPart = (part: any) => {
//     // Assuming the part is in camel case
//     // Split the part based on capital letters
//     const words = part.split(/(?=[A-Z])/);
//     // Join the words with space and capitalize the first letter
//     return words
//       .map((word: any) => word.charAt(0).toUpperCase() + word.slice(1))
//       .join(' ');
//   };

//   return (
//     <nav className='section'>
//       <div className='max-w-7xl mx-auto'>
//         <div className='flex items-center'>
//           <Link href='/'>Home</Link>
//           {parts.length > 0 && (
//             <span className='mx-2 text-gray-300'>{'>'}</span>
//           )}
//           {parts.map((part, index) => (
//             <span key={index} className='text-gray-300'>
//               {transformPart(part)}
//               {index !== parts.length - 1 && (
//                 <span className='mx-2'>{'>'}</span>
//               )}
//             </span>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
