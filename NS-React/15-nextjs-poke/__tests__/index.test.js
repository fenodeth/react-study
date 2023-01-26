import { render, screen } from "@testing-library/react";
import Index, { getStaticProps } from "../src/pages/index";

// const add = () => 2 + 2;

describe("Index", () => {
  describe("Component", () => {
    it("se renderiza", () => {
      //* Imprime la pantalla completa y renderiza sus objetos
      //   render(<Index pokemones={[]} />);
      //   const paragraph = screen.getByText("Pokemones");
      //   const paragraph2 = screen.getByTestId("titulo");
      //   //   console.log(paragraph.innerHTML);
      //   expect(paragraph).toBeInTheDocument();
      //   expect(paragraph2).toBeInTheDocument();

      const { getByTestId } = render(
        <Index
          pokemones={[{ name: "Chanchito Feliz", url: "/pokemon/detalle/1" }]}
        />
      );
      const paragraph = getByTestId("titulo");
      expect(paragraph).toBeInTheDocument();
      //   console.log(paragraph);

      const chanchito = screen.getByText("Chanchito Feliz");
      //   console.log(chanchito.href); // entrega la URL en esta caso localhost/pokemon/detalle/1
      expect(chanchito).toBeInTheDocument();
      //   console.log(chanchito.getAttribute("href")); // entrega la propiedad que se le entrega pokemon/1
      const url = chanchito.getAttribute("href");
      expect(url).toEqual("pokemones/1");
    });
  });
  describe("getStaticProps", () => {
    // Los describe no pueden recibir un async
    // además los tests no se ejecutan si estan dentro de describe
    // para su ejecucion se utiliza it
    it("return pokemones", async () => {
      // crea un mock -> asigna funcionalidades e inspecciona como fueron llamadas
      global.fetch = jest.fn().mockImplementation((url) => {
        expect(url).toBe("https://pokeapi.co/api/v2/pokemon?limit=151");
        console.log(url);
        return new Promise((resolve) => {
          resolve({
            json: () =>
              Promise.resolve({
                results: "lista de pokemones",
              }),
          });
        });
      });
      const { props } = await getStaticProps();
      expect(props.pokemones).toBe("lista de pokemones");
    });
  });
  //   describe("getStaticProps", () => {
  //     it("suma 2 + 2", () => {
  //       expect(add() /** + 1 (failed)*/).toBe(4);
  //     });
  //   });
});
