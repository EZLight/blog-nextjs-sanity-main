// import React from 'react'


// export default function Dropdown(props: { demo: any; width: any; classType: any; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | Iterable<React.ReactNode> | null | undefined; width2: any; children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | Iterable<React.ReactNode> | null | undefined; }){
    
//     function myFunction() {
//         var x = document.getElementById(`${props.demo}`);
//         if (x.className.indexOf("w3-show") == -1) {
//           x.className += " w3-show";
//         } else { 
//           x.className = x.className.replace(" w3-show", "");
//         }
//       }
// return(
//     <div>
//     <button onClick={myFunction} style={{width:`${props.width}`}} className={`${props.classType}`}>{props.title}</button>
//  <section className="w3-dropdown-click" >
//     <article id={`${props.demo}`} className="w3-dropdown-content w3-transparent" style={{width:`${props.width2}`}}>
//      {props.children}
//     </article>
//   </section>
//     </div>
// )
// }