import React, { Component } from 'react'
import Tags from './metrics/Tags'
import Info from './metrics/Info'

class Results extends Component {
  render() {
    return(
      <div className="w-full container mx-auto m-24">
        <div id="tags">
        <div class="px-2">
          <div class="flex -mx-2">
            <Tags tags={this.props.tags} />
            <Info title={this.props.title} channelTitle={this.props.channelTitle} views={this.props.views}/>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Results



// import React, { Component } from "react";
// import Tags from "./metrics/Tags";
// import Info from "./metrics/Info";

// export default class Result extends Component {
//   render() {
//     return (
//       <div className="w-full container mx-auto m-24">
//         <div id="tags">
//           <div className="px-2">
//             <div className="flex -mx-2">
//               <Tags tags={this.props.tags} />

//               <Info
//                 title={this.props.title}
//                 channelTitle={this.props.channelTitle}
//                 views={this.props.views}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
