import React from "react";
import slide0 from "../../../../img/slide/slide0.jpg";
import slide1 from "../../../../img/slide/slide1.jpg";
import slide2 from "../../../../img/slide/slide2.jpg";
import styles from "./Slide.module.css";

const Slide = () => {
  const slide = React.useRef(null);
  const square0 = React.useRef(null);
  const square1 = React.useRef(null);
  const square2 = React.useRef(null);

  const listaTexto = [
    {
      index: 0,
      titulo: "AFIADA",
      subTitulo: "A afiação que você precisa",
      slide: slide0,
      square: square0,
    },
    {
      index: 1,
      titulo: "PRECISA",
      subTitulo: "A precisão necessária para as tarefas diárias",
      slide: slide1,
      square: square1,
    },
    {
      index: 2,
      titulo: "CORTANTE",
      subTitulo: "O melhor corte do país",
      slide: slide2,
      square: square2,
    },
  ];

  const [textoSlide, setTextoSlide] = React.useState(listaTexto[0]);
  const [imgBg, setImgBg] = React.useState(listaTexto[0].slide);

  let styleSlide = {
    backgroundImage: `url(${imgBg})`,
    backgroundSize: `cover`,
    color: `#fff`,
    transition: `background-image 0.5s ease-out 0.3s`,
  };

  function changeSlide(action) {
    clearTimeout(startSlide);
    if (textoSlide.index === 2 && action === "forward") {
      setTextoSlide(listaTexto[0]);
      setImgBg(listaTexto[0].slide);
      listaTexto[2].square.current.classList.remove(`${styles.active}`);
      listaTexto[0].square.current.classList.add(`${styles.active}`);
    } else if (textoSlide.index === 0 && action === "back") {
      setTextoSlide(listaTexto[2]);
      setImgBg(listaTexto[2].slide);
      listaTexto[0].square.current.classList.remove(`${styles.active}`);
      listaTexto[2].square.current.classList.add(`${styles.active}`);
    } else if (action === "forward") {
      setTextoSlide(listaTexto[textoSlide.index + 1]);
      setImgBg(listaTexto[textoSlide.index + 1].slide);
      listaTexto[textoSlide.index].square.current.classList.remove(
        `${styles.active}`
      );
      listaTexto[textoSlide.index + 1].square.current.classList.add(
        `${styles.active}`
      );
    } else {
      setTextoSlide(listaTexto[textoSlide.index - 1]);
      setImgBg(listaTexto[textoSlide.index - 1].slide);
      listaTexto[textoSlide.index].square.current.classList.remove(
        `${styles.active}`
      );
      listaTexto[textoSlide.index - 1].square.current.classList.add(
        `${styles.active}`
      );
    }
  }

  function goBack() {
    changeSlide("back");
  }

  function goForward() {
    changeSlide("forward");
  }

  const startSlide = setTimeout(goForward, 3000);

  return (
    <div style={styleSlide} ref={slide}>
      <div className={"container"}>
        <div className={styles.slideTexto}>
          <h1>{textoSlide.titulo}.</h1>
          <h3>{textoSlide.subTitulo}</h3>
        </div>
        <div className={styles.slideButtons}>
          <div className={styles.arrowButton} onClick={goBack}>
            <i className={styles.left}></i>
          </div>
          <div className={styles.arrowButton} onClick={goForward}>
            <i className={styles.right}></i>
          </div>
        </div>
        <div className={styles.slideControl}>
          <div
            className={`${styles.square} + ${styles.active}`}
            ref={square0}
          ></div>
          <div className={styles.square} ref={square1}></div>
          <div className={styles.square} ref={square2}></div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
