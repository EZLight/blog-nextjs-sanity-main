'use client'
import React from "react"
import { PortableText } from "@portabletext/react"
import Modal from 'react-modal';



 function PageModal(props: { btnSetting: string | undefined; btnName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | Iterable<React.ReactNode> | null | undefined; modalId: any; label: any; children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | Iterable<React.ReactNode> | null | undefined; }){
  const [modalIsOpen2, setIsOpen2] = React.useState(false)

  function openModal2(){
    setIsOpen2(true)
  }
  
  function closeModal2(){ setIsOpen2(false)}
  
 
    // Modal.setAppElement('#root')

  return (   
    
    <div className="w3-container w3-hide-large">


  
  
<div className="w3-container w3-hide-large">
<button onClick={openModal2} className={props.btnSetting} >{props.btnName}</button>


  <Modal
   id={`${props.modalId}`}
   isOpen={modalIsOpen2}
   onRequestClose={closeModal2}
   contentLabel={`${props.label}`}>
    <div className="w3-modal-content">
      <div className="w3-container w3-tiny">
        <span onClick={closeModal2} className="w3-button w3-display-topright  w3-red">&times;</span>
        <article>
    <section className="w3-margin w3-center">
{props.children}   
</section>
 </article> 
      </div>
    </div> 

    </Modal>
  </div>
  </div>
  )
}






export default PageModal