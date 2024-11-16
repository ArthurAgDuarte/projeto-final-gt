import React from "react";
import "./style.css";

function FilterGroup() {
    const marcas = ['Adidas', 'Balenciaga', 'K-Swiss', 'Nike', 'Puma'];
    const categorias = ['Esporte e lazer', 'Casual', 'Utilitário', 'Corrida'];
    const generos = ['Masculino', 'Feminino', 'Unisex'];

    return (
        <div className="filter">
            <h1>Filtros</h1>
            <hr />
            <h2>Marca</h2>
            <ul>
                {marcas.map((item, index) => (
                    <li key={index}>
                        <input type="checkbox" />{item}
                    </li>
                ))}
            </ul>
            <h2>Categoria</h2>
            <ul>
                {categorias.map((item, index) => (
                    <li key={index}>
                        <input type="checkbox" />{item}
                    </li>
                ))}
            </ul>
            <h2>Gênero</h2>
            <ul>
                {generos.map((item, index) => (
                    <li key={index}>
                        <input type="checkbox" />{item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FilterGroup;


// import React from "react";
// import "./style.css";

// function FilterGroup(props) {
//     return (
//         <div className="filter">
//             <h1>{props.title}</h1>
//             <hr />
//             <h2>Marca</h2>
//             <ul>
//                 {props.marcasProps.map((item, index) => (
//                     <li key={index}>
//                         <input type="checkbox" />{item}
//                     </li>
//                 ))}
//             </ul>
//             <h2>Categoria</h2>
//             <ul>
//                 {props.categoriaProps.map((item, index) => (
//                     <li key={index}>
//                         <input type="checkbox" />{item}
//                     </li>
//                 ))}
//             </ul>
//             <h2>Gênero</h2>
//             <ul>
//                 {props.generoProps.map((item, index) => (
//                     <li key={index}>
//                         <input type="checkbox" />{item}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default FilterGroup;