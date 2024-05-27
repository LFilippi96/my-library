import React from "react";
import styles from "./PropertySearch.module.css";

// export const PropertySearch: React.FC = () => {

export const PropertySearch = () => {
  return (
    <div className={styles.searchContainer}>
      <select className={styles.select}>
        <option value="">Tipo de propiedad</option>
        <option value="house">Casa</option>
        <option value="apartment">Apartamento</option>
      </select>
      <input
        type="text"
        placeholder="Ingresá ubicación o características"
        className={styles.input}
      />
      <button className={styles.button}>Buscar</button>
    </div>
  );
};
