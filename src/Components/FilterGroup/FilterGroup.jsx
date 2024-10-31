//function que imprime o filter, atraves de const usando props
import React from "react";

const marcas =['Adidas','Balenciaga','K-Swiss','Nike','Puma'];
const categoria = ['Estporte e lazer','Casual','Utilitário','Corrida'];
const genero = ['Masculino','Feminino','Unisex'];

<FilterGroup
    title="Filtar por"
    marcasProps={marcas}
    categoriaProps={categoria}
    generoProps={genero}
/>

function FilterGroup(props){
    return(
        <div>
            <h2>{props.title}</h2>

            <h2>Marca</h2>
            <ul>
                {props.marcasProps.map((item,index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>


            <h2>Categoria</h2>
            <ul>
                {props.categoriaProps.map((item,index) =>(
                    <li key={index}>{item}</li>
            ))}
            </ul>


            <h2>Gênero</h2>
            <ul>
                {props.generoProps.map((item,index) => (
                    <li key={index}>{item}</li>
            ))}
            </ul>
        </div>

    );

}

export default FilterGroup;