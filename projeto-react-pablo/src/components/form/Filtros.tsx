import "./Filtros.module.css";

const Filtros = ({
    textspan,
    idselect,
    nameselect,
    nameoptions,
}:{
    textspan?: string;
    idselect?: string;
    nameselect?: string;
    nameoptions?: { valor: any; nome: string }[]; // Array de opções

}) => {
    return(
        <div className="filtros">
            <span>{textspan}</span>
            <select id={idselect} name={nameselect}>
                {nameoptions?.map((option?: any) => (
                    <option value={option.valor} key={option.valor}>{option.nome}</option>
                ))}
            </select>
        </div>
    )
}

export default Filtros;
