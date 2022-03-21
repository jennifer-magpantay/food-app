import { useState } from "react";

import { FiEdit3, FiTrash } from "react-icons/fi";

import { Container } from "./styles";

import { api } from "../../services/api";

export interface FoodProps {
  id: string;
  name: string;
  description: string;
  price: string;
  available: boolean;
  image: string;
}

export const Food = ({
  id,
  name,
  description,
  price,
  available,
  image,
}: FoodProps) => {
  const [isAvailable, setIsAvailable] = useState(false);

  const toogleAvailable = async () => {
    await api.put<FoodProps>(`/foods/${id}`, {
      ...food,
      available: !isAvailable,
    });

    setIsAvailable(!isAvailable);
  };

  const setEditingFood = (
    food: string,
    handleEditFood: (food: string) => void
  ) => {
    handleEditFood(food);
  };

  return (
    <Container available={isAvailable}>
      <header>
        <img src={image} alt={name} />
      </header>
      <section className="body">
        <h2>{name}</h2>
        <p>{description}</p>
        <p className="price">
          R$ <b>{price}</b>
        </p>
      </section>
      <section className="footer">
        <div className="icon-container">
          <button
            type="button"
            className="icon"
            onClick={() => setEditingFood}
            data-testid={`edit-food-${id}`}
          >
            <FiEdit3 size={20} />
          </button>

          <button
            type="button"
            className="icon"
            onClick={() => handleDelete(id)}
            data-testid={`remove-food-${id}`}
          >
            <FiTrash size={20} />
          </button>
        </div>

        <div className="availability-container">
          <p>{isAvailable ? "Disponível" : "Indisponível"}</p>

          <label htmlFor={`available-switch-${id}`} className="switch">
            <input
              id={`available-switch-${id}`}
              type="checkbox"
              checked={isAvailable}
              onChange={() => toogleAvailable}
              data-testid={`change-status-food-${id}`}
            />
            <span className="slider" />
          </label>
        </div>
      </section>
    </Container>
  );
};
