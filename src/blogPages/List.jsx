export default function List({lista, index = 0}) {

    if (!lista || !lista[index]) {
        return null;
    }
    
    return (
        <>
            <p>{lista[index].paragraph}</p>

            <ul style={{ lineHeight:"2" }}>
                {lista[index].items.map((item, i)=> (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </>
    );
}