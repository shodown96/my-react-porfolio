import React, { useState } from 'react';


const Contact = ({ data }) => {
   // const [url, setUrl] = useState('mailto:test@example.com?subject=subject&body=body');

   //  const handleClick = (e) => {
   //    e.preventDefault();
   //    window.open(`mailto:${email}?subject=${subject}&body=${name}: ${message}`);
   //    alert("Accepted")
   //    document.querySelector("#message-success").style.display = "block";
   //  }

   // const encode = (data) => {
   //    return Object.keys(data)
   //        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
   //        .join("&");
   //  }
   
   const [formData, setFormData] = useState({
      name:"",
      email:"",
      subject:"",
      message:"",

   })

   const { name, email, subject, message } = formData;

   const handleChange = e => {
      setFormData({
         ...formData,
         [e.target.id]:e.target.value
      })
   }

   const handleSubmit = e => {
      e.preventDefault();
      fetch("https://elijahsoladoye.herokuapp.com/api/contact/", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: formData
       })
         .then(() => {
            document.querySelector("#message-success").style.display = "block";
            document.querySelector("#message-warning").style.display = "none";
         })
         .catch(error => {
            document.querySelector("#message-warning").style.display = "block";
            document.querySelector("#message-success").style.display = "none";
         });
      // console.log(formData, encode(formData))
   }

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

               <form id="contactForm" name="contactForm" method="post" onSubmit={handleSubmit}>

					<fieldset>
                  <div>
						   <label htmlFor="name">Name <span className="required">*</span></label>
						   <input value={name} type="text" size="35" id="name" name="name" onChange={handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="email">Email <span className="required">*</span></label>
						   <input value={email} type="email" size="35" id="email" name="email" onChange={handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="subject">Subject</label>
						   <input value={subject} type="text" size="35" id="subject" name="subject" onChange={handleChange}/>
                  </div>

                  <div>
                     <label htmlFor="message">Message <span className="required">*</span></label>
                     <textarea value={message} onChange={handleChange} cols="50" rows="5" id="message" name="message"></textarea>
                  </div>

                  <div>
                     <button type='submit' className="submit">Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>

               <div id="message-warning"> Oops, seems I'm having a few issues with my server.</div>
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
