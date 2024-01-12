import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/minha_fotoo.png";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá, Mundo!</h1>
        <p className={styles.paragrafo}>
          Bem-vindo ao meu portfólio! Aqui, você encontrará meu mundo de
          desenvolvimento front-end, onde transformo ideias em experiências
          digitais cativantes. Cada projeto reflete minha paixão por criar
          interfaces intuitivas e visualmente envolventes. Explore e inspire-se
          nesta jornada digital!
        </p>
      </div>
      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          alt="Circulo Colorido"
          aria-hidden={true}
        />

        <img className={styles.minhaFoto} src={minhaFoto} alt="Minha Foto" />
      </div>
    </div>
  );
}
