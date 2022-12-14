import {useRef} from 'react'


const Accordion = ()=>{
  const ref= useRef()
  const chevron = useRef()

    const handleOpen = ()=>{
    ref.current.classList.toggle('open')
    chevron.current.classList.toggle('open')
  }

  return(
          <div className='accordion-item'>
        <div className='accordion-header' onClick={handleOpen}>
            <i class="fa-solid fa-shield"></i>
            <h3>Today we offer you a collection of web</h3>
            <i class="fa-solid fa-chevron-right" ref={chevron}></i>
        </div>
        <div className='elastic-part' ref={ref}>
            <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
        </div>
      </div>
  )
}

export default Accordion