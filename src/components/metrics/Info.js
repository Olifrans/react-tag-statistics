import React from 'react'

function Info(props) {
  return(
    <div className="w-1/2 px-2 rounded overfloww-hidden shadow-lg">
      <div classname="px-6 py-4">
        <div className="font-bold text-xl mb-2">Info</div>
        <div><strong>Canal Titulo: </strong><span className="text-gray-700 text-base">{props.channelTitle}</span></div>
        <div><strong>Video Titulo: </strong><span className="text-gray-700 text-base">{props.title}</span></div>
        <div><strong>Views: </strong><span className="text-gray-700 text-base">{props.views}</span></div>
      </div>
    </div>
  )
}

export default Info




// import React from "react";

// export default function Info(props) {
//   return (
//     <div className="w-1/2 px-2 rounded overfloww-hidden shadow-lg">
//       <div classname="px-6 py-4">
//         <div className="font-bold text-xl mb-2">Informações</div>
//         <div>
//           <strong>Canal Titulo: </strong>
//           <span className="text-gray-700 text-base">{props.channelTitle}</span>
//         </div>
//         <div>
//           <strong>Video Titulo: </strong>
//           <span className="text-gray-700 text-base">{props.title}</span>
//         </div>
//         <div>
//           <strong>Views: </strong>
//           <span className="text-gray-700 text-base">{props.views}</span>
//         </div>
//       </div>
//     </div>
//   );
// }
