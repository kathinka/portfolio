import "./introduction.css";

export const Introduction = () => {
  const profileImage = "./public/assets/kat.webp";
  const profileImageBackUp = "./public/assets/kat.webp";
  const arrow = "./public/assets/Arrow.svg";
  return (
    <section className="center-wrap">
      <main className="wrapper">
        <section className="title">
        <picture className="profile-image mobile">
                    <source srcSet={profileImage}
                      alt="Kathinka Sewell" type="image/webp" />
                    <source srcSet={profileImageBackUp}
                      alt="Kathinka Sewell" type="image/png" />
                    <img className="profile-image mobile"
                      src={profileImageBackUp}
                      alt="Kathinka Sewell"
                    />
                  </picture>
          <h1>Hi, I&apos;m Kathinka Sewell</h1>
          <h2>Frontend Developer</h2>
        </section>
        <section className="introduction">
        <picture className="profile-image wide">
                    <source srcSet={profileImage}
                      alt="Kathinka Sewell" type="image/webp" />
                    <source srcSet={profileImageBackUp}
                      alt="Kathinka Sewell" type="image/png" />
                    <img className="profile-image wide"
                      src={profileImageBackUp}
                      alt="Kathinka Sewell"
                    />
                  </picture>
          <article className="intro">
            <p>
              Frontend Developer with a background in Graphic design, UX/UI, Art Direction and with experience leading agile development projects as a scrum master. Passionate about creating web applications that not only looks good, but also is user-friendly and accessible. Always eager to learn new technologies and improve her skills.
            </p>
          </article>
        </section>
        <img className="arrow" src={arrow} alt="arrow" />
      </main>
    </section>
  )
}