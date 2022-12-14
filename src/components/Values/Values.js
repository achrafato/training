import './values.scss'
import Accordion from './Accordion'

const Values = ()=>{

  return(
    <div className='section'>
      <div className='container'>
          <div className='pic'>
              <div class='back'></div>
              <img src='https://images.unsplash.com/photo-1511452885600-a3d2c9148a31' alt='val_pic'/>
          </div>

          <div className='val_content'>
            <div className='top_content'>
              <span>Our Value</span>
              <h2>Value We Give To You<span>.</span></h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
            </div>

            <div className='bottom_content'>
               {
                  [...Array(3)].map(()=>(
                    <Accordion/>
                  ))
               }
            </div>

          </div>
      </div>
    </div>
  )
}

export default Values