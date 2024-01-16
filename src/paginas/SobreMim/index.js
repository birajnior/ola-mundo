import styles from "./SobreMim.module.css";
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/IMG_0346.JPG";

export default function SobreMim() {
  return (
    <PostModelo fotoCApa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, eu sou o Bira Jr!</h3>

      <img
        src={fotoSobreMim}
        alt="Foto de Bira Jr."
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        Oi, tudo bem? Sou um desenvolvedor Front-end e estou feliz de te ver por
        aqui.
      </p>
      <p className={styles.paragrafo}>
        Sou uma pessoa extremamente apaixonada por tecnologia, paixão essa que
        começou a surgir em mim desde que ganhei o meu primeiro videogame, um
        Super Nintendo com o cartucho do Super Mario World.
      </p>
      <p className={styles.paragrafo}>
        Minha fascinação por computadores e o desejo de entender como eles
        funcionavam, assim como tudo o que estava por trás dos softwares e
        hardwares, ocorreram por volta de 2005/2006, quando eu tinha cerca de 12
        anos. Comecei a ter meus primeiros contatos com computadores ao entrar
        no meu primeiro curso de informática, oferecido por um vereador da
        cidade para crianças e adolescentes do bairro. Assim, fui participando
        desses cursos básicos oferecidos na comunidade pelo vereador, e em 2008,
        ganhei meu primeiro computador. A partir daí, minha paixão só aumentou,
        e busquei aprofundar meus conhecimentos fazendo diversos cursos, como
        <em>
          <strong>
            {" "}
            montagem e manutenção de micro, web design, redes e CorelDraw básico
          </strong>
        </em>
        .
      </p>
      <p className={styles.paragrafo}>
        Atualmente, estou cursando Defesa Cibernética na Estácio. No entanto, o
        Front-end fez ressurgir todo aquele amor e paixão que eu tinha na
        adolescência pela tecnologia em geral. Hoje, já consigo dominar o básico
        de HTML, CSS e JavaScript, e também iniciei meus estudos em React.
      </p>
      <p className={styles.paragrafo}>
        Por fim, sei que estou apenas no começo da minha jornada, mas tenho
        certeza de que não irá faltar força de vontade e dedicação para me
        aperfeiçoar cada dia mais.
      </p>
    </PostModelo>
  );
}
