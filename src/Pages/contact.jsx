import './contact.css'

export default function Contact(){
    return(
        <main className="contact-page">
        <section className="contact-card">
        <h1>Contact</h1>
        <input type="text" placeholder="name" /><br />
         <input type="text" placeholder="email" /><br />
         <textarea cols="30" rows="7" placeholder="Your message"></textarea><br />
        <input type="button" value="Envoyer" />
        </section>
        </main>
    ) 
}
