import React, { memo } from "react";
import { isEqual } from "lodash";

// Memorization -> funciones que se ejecutan constantemente devolviendo mismos resultados
// Guardar resultados en memoria
// Prevenir el renderizado siempre y cuando las propiedades que recibe el componente sean exactamente
// las mismas que recibió previamente

// Para comparar {} & [] se evalua cada uno de los elementos que estos contengan

// const Li = memo(({ fullname }) => {
//   console.log(`renderizando ${fullname}`);
//   return <li>{fullname}</li>;
// });

// const MyList = ({ data }) => {
//   console.log("renderizando lista");
//   return (
//     <ul>
//       {data.map((x) => (
//         <Li key={x.name + x.lastname} fullname={`${x.name} ${x.lastname}`} />
//       ))}
//     </ul>
//   );
// };

const Li = memo(({ children }) => {
  console.log(`renderizando ${children}`);
  return <li>{children}</li>;
}, isEqual);

const MyList = ({ data }) => {
  console.log("renderizando lista");
  return (
    <ul>
      {data.map((x) => (
        <Li key={x.name + x.lastname}>
          {x.name} {x.lastname}
        </Li>
      ))}
    </ul>
  );
};

export default memo(MyList);
