import { useState } from "react";

import { FiEdit3, FiTrash } from "react-icons/fi";

import { Container } from "./styles";

import api from "../../services/api";
import { priceFormatter } from "../../services/priceFormatter";

export interface FoodDataProps {
  id: string;
  name: string;
  description: string;
  price: string;
  available: boolean;
  image: string;
}

interface FoodProps {
  food: FoodDataProps;
  handleDelete: (id: string) => void;
  handleEditFood: (food: FoodDataProps) => void;
}

export const Food = ({ food, handleDelete, handleEditFood }: FoodProps) => {
  const [isAvailable, setIsAvailable] = useState(food.available);

  // { ...food } access all props from FoodDataProps
  const toogleAvailable = async () => {
    await api.put(`/foods/${food.id}`, {
      ...food,
      available: !isAvailable,
    });
    setIsAvailable(!isAvailable);
    console.log("testing togle");
  };

  const setEditingFood = () => {
    handleEditFood(food);
  };

  return (
    <Container available={isAvailable}>
      <header>
        <img src={food.image} alt={food.name} />
      </header>
      <section className="body">
        <h2>{food.name}</h2>
        <p>{food.description}</p>
        <p className="price">
          <b>{priceFormatter(Number(food.price))}</b>
        </p>
      </section>
      <section className="footer">
        <div className="icon-container">
          <button
            type="button"
            className="icon"
            onClick={setEditingFood}
            data-testid={`edit-food-${food.id}`}
          >
            <FiEdit3 size={20} />
          </button>

          <button
            type="button"
            className="icon"
            onClick={() => handleDelete(food.id)}
            data-testid={`remove-food-${food.id}`}
          >
            <FiTrash size={20} />
          </button>
        </div>

        <div className="availability-container">
          <p>{isAvailable ? "Available" : "Unavailable"}</p>

          <label htmlFor={`available-switch-${food.id}`} className="switch">
            <input
              id={`available-switch-${food.id}`}
              type="checkbox"
              checked={isAvailable}
              onChange={toogleAvailable}
              data-testid={`change-status-food-${food.id}`}
            />
            <span className="slider" />
          </label>
        </div>
      </section>
    </Container>
  );
};
