import './Classes.css';

const Classes = (props) => {
    return (
    <section className="classe" style={ { backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria}}>{props.nome}</h3>
        </section>
    )
}


export default Classes;