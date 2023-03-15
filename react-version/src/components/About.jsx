import '../styles/About.css'

const About = () => {
  return (
        <div className="section about" id="about">
            <div className="container">
                <h1 className="title">Know About me</h1>
                <div className=" d-flex flex-wrap">
                    <div className="about-wrap" data-aos="fade-up">
                        <h2 className="title-into">Hi! I'm Chirag &#128075;&#127996; &#128526;,</h2>
                        <p className="abt-me-txt">A 26 year old Front End Engineer based in Mumbai with an experience of 3+ year's (and counting..... &#128540;). I would like to call myself as a passionate developer who loves coding and enjoys solving problem..💓.</p>
                        <p className="abt-me-txt">Apart from my job, I like to learn and guide 🧭 people to grow as a developer...</p>
                        <p className="abt-me-txt">In my free time you can find me at the gym 🏋️‍♂️, or at the beach  🏖  or bikeriding &#128692;&#127996; around Mumbai.</p>
                    </div>
                    <div className="about-img-div d-flex flex-row-reverse">
                        <div className="about-border" data-aos="fade-up" data-aos-delay=".5"></div>
                        <div className="img-div" data-aos="fade-right">
                        <p>{'</>'}</p>
                        <p>{'{ }'}</p>
                        <p>Javascript</p>
                        <p>Wordpress</p>
                    </div>

                </div>
            </div>
        </div>
    </div >
  )
}

export default About