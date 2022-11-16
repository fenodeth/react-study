import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import "./Header.css";
import "./Content.css";
import "./Article.css";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const open = (url) => {
    window.open(url.html);
    console.log(url);
  };
  return (
    <>
      <header>
        <Formik
          initialValues={{ search: "" }}
          onSubmit={async (values) => {
            // Llamar API Unsplash
            const response = await fetch(
              `https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`,
              {
                headers: {
                  Authorization:
                    "Client-ID 7CPDAPi7MFJpzs3t5Mp-a6X6cd-ZzMDKwBvLIS6FfTI",
                },
              }
            );
            const data = await response.json();
            setPhotos(data.results);
          }}
        >
          <Form>
            <h2>Ingrese un valor y luego presione "Enter" para buscar</h2>
            <Field
              label="First Name"
              placeholder="Ingresa un valor"
              name="search"
            />
          </Form>
        </Formik>
      </header>
      <div className="container">
        <div className="center">
          {photos.map((p) => (
            <article
              key={p.id}
              onClick={() => {
                open(p.links);
              }}
            >
              <img src={p.urls.regular} alt={p.id} />
              <p>
                {[
                  p.description ? p.description : "Sin Descripción",
                  p.alt_description
                    ? p.alt_description
                    : "Sin Descripción Alternativa",
                ].join(" - ")}
              </p>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
