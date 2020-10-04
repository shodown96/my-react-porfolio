import React from 'react';

const Contact = ({ data }) => {
   // const [url, setUrl] = useState('mailto:test@example.com?subject=subject&body=body');
   // const [name, setName] = useState('');
   // const [subject, setSubject] = useState('');
   // const [email, setEmail] = useState('');
   // const [message, setMessage] = useState('');

   // console.log(data)

   //  const handleClick = (e) => {
   //    e.preventDefault();
   //    window.open(`mailto:${email}?subject=${subject}&body=${name}: ${message}`);
   //    alert("Accepted")
   //    document.querySelector("#message-success").style.display = "block";
   //  }
   
   // const handleSubmit = e => {e.preventDefault();}

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{data?.message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form id="contactForm" name="contactForm" method="post">

					<fieldset>
                  <input type="hidden" name="form-name" value="contactForm" />
                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" size="35" id="contactName" name="contactName"/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" size="35" id="contactEmail" name="contactEmail"/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" size="35" id="contactSubject" name="contactSubject"/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="5" id="contactMessage" name="contactMessage"></textarea>
                  </div>

                  <div>
                     <button type='submit' className="submit">Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {data?.name}<br />
						   {data?.address.street} <br />
						   {data?.address.city}, {data?.address.state} {data?.address.zip}<br />
						   <span>{data?.phone}</span>
					   </p>
				   </div>

               <div className="widget widget_tweets">

		         </div>
            </aside>
      </div>
   </section>
    );
}

export default Contact;
