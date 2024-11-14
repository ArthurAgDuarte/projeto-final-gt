
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes";

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}


// import { useEffect, useState } from "react";
// import "./index.css";
// import AppRoutes from "./Routes/AppRoutes"; 


// export default function App() {
//   const [produto, setProduto] = useState(null); 
//   const urlAPI = "https://6721a5a698bbb4d93ca91b8c.mockapi.io/ApiTeste/teste";

  
//   useEffect(() => {
//     fetch(urlAPI)
//       .then((resultado) => resultado.json())
//       .then((data) => {
//         console.log(data); 
//         setProduto(data[0]); 
//       })
//       .catch((erro) => {
//         console.error("Erro", erro);
//         alert("Não foi possível carregar os dados");
//       });
      
//   }, []);

//   return (
//     <>
//       <AppRoutes/>
//     </>
//   );
// }

// ;