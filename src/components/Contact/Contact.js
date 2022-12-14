import './contact.scss'


const Contact = ()=>{

  return(
    <div className="section">
      <div className="container">

          <div className='contact_content'>
            <div className='top_content'>
              <span>Our Value</span>
              <h2>Value We Give To You<span>.</span></h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
            </div>

            <div className='contact_us'>
                <div className='call'>
                    <div className='top'>
                      <div className='left'>
                        <i class="fa-solid fa-phone-volume"></i>
                      </div>
                      <div className='right'>
                        <h3>Call</h3>
                        <span>000.00.00.00</span>
                      </div>
                    </div>

                    <div className='bottom'>
                      <button>Call Now</button>
                    </div>
                </div>
                <div className='call'>
                    <div className='top'>
                      <div className='left'>
                        <i class="fa-solid fa-phone-volume"></i>
                      </div>
                      <div className='right'>
                        <h3>Call</h3>
                        <span>000.00.00.00</span>
                      </div>
                    </div>

                    <div className='bottom'>
                      <button>Call Now</button>
                    </div>
                </div>
                <div className='call'>
                    <div className='top'>
                      <div className='left'>
                        <i class="fa-solid fa-phone-volume"></i>
                      </div>
                      <div className='right'>
                        <h3>Call</h3>
                        <span>000.00.00.00</span>
                      </div>
                    </div>

                    <div className='bottom'>
                      <button>Call Now</button>
                    </div>
                </div>


                <div className='call'>
                    <div className='top'>
                      <div className='left'>
                        <i class="fa-solid fa-phone-volume"></i>
                      </div>
                      <div className='right'>
                        <h3>Call</h3>
                        <span>000.00.00.00</span>
                      </div>
                    </div>

                    <div className='bottom'>
                      <button>Call Now</button>
                    </div>

                </div>
            </div>
          </div>

          <div className='pic'>
              <div class='back'></div>
              <img src='https://images.unsplash.com/photo-1511452885600-a3d2c9148a31' alt='val_pic'/>
          </div>

      </div>
    </div>
  )
}

export default Contact