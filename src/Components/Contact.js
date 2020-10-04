import React from 'react';

const Contact = ({ data }) => {
   // const [url, setUrl] = useState('mailto:test@example.com?subject=subject&body=body');
   // const [name, setName] = useState('');
   // const [subject, setSubject] = useState('');
   // const [email, setEmail] = useState('');
   // const [message, setMessage] = useState('');

   // const [formData, setFormData] = useState({
   //    name:"",
   //    email:"",
   //    subject:"",
   //    message:"",

   // })

   // console.log(data)

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

   // const handleSubmit = e => {
   //    e.preventDefault();
   //    // fetch("/", {
   //    //    method: "POST",
   //    //    headers: { "Content-Type": "application/x-www-form-urlencoded" },
   //    //    body: encode({ "contactForm": "contact", ...this.state })
   //    //  })
   //    //    .then(() => alert("Success!"))
   //    //    .catch(error => alert(error));
   //    console.log(formData)
   // }

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
                  {/* <input type="hidden" name="contactForm" value="contactForm" /> */}
                  <div>
						   <label htmlFor="name">Name <span className="required">*</span></label>
						   <input type="text" size="35" id="name" name="name"/>
                  </div>

                  <div>
						   <label htmlFor="email">Email <span className="required">*</span></label>
						   <input type="text" size="35" id="email" name="email"/>
                  </div>

                  <div>
						   <label htmlFor="subject">Subject</label>
						   <input type="text" size="35" id="subject" name="subject"/>
                  </div>

                  <div>
                     <label htmlFor="message">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="5" id="message" name="message"></textarea>
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
