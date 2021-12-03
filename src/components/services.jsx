export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Our Services</h2>
          <p>
          <em>"Jessica takes away all the stress and pressure by crafting captions and graphics for social media posts that are engaging and relevant to my business." - Maria Inoa</em>
          </p>
          <div classname='row'>
          <img src='img/services.png' className='img-responsive' alt='' />{' '}
          </div>
          <br />
          <a
                  href='https://jmercermarketing.thinkific.com/courses/conquer-your-content' target='_blank' rel='noreferrer'
                  className='btn btn-custom btn-lg page-scroll'
                >Learn More</a>
        </div>
        
        {/*<div className='row'>
        
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  <i className={d.icon}></i>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'} 
        </div>*/}
      </div>
    </div>
  )
}
