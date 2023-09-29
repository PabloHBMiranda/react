import styles from "./Select.module.css";

const Select = ({
    text,
    name,
    handleOnChange,
    options,
    value
}:{
    text?: string;
    name?: string;
    options?: any | null;
    handleOnChange?: any|null;
    value?: any|null;
}) =>{
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <select
                name={name}
                id={name}
                onChange={handleOnChange}
                value = {value || ""}>
                    <option> Selecione uma opção</option>
                    {options.map((option?: any) =>(
                        <option
                        value={option.id}
                        key={option.id}>
                            {option.name}
                        </option>
                    ))}
                </select>
        </div>
    );
};

export default Select;
