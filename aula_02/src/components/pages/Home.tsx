import styles from "./Home.module.css";
import Filtros from "../form/Filtros";


function Home (){
    const filtrosProps = {
        textspan: "Selecione uma opção:",
        idselect: "filtroOpcoes",
        nameselect: "opcoes",
        nameoptions: [
            { valor: 'opcao1', nome: 'Opção 1' },
            { valor: 'opcao2', nome: 'Opção 2' },
            { valor: 'opcao3', nome: 'Opção 3' },
        ],
    };
    return (
        <section className={styles.home}>
            <Filtros {...filtrosProps} />
        </section>
    );
}
export default Home;
