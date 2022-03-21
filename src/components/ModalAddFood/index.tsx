import { useRef } from "react";
import { FiCheckSquare } from "react-icons/fi";

import { Form } from "./styles";
import { Modal } from "../Modal";
import { Input } from "../Input";

import { FoodDataProps } from "../Food";

interface ModalAddFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: (data: FoodDataProps) => void;
}

export const ModalAddFood = ({
  isOpen,
  setIsOpen,
  handleAddFood,
}: ModalAddFoodProps) => {
  const formRef = useRef(null);

  const handleSubmit = async (data: FoodDataProps) => {
    handleAddFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>New Dish</h1>
        <Input name="image" placeholder="Paste the image link here" />

        <Input name="name" placeholder="Ex: Soy Noodles" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Description" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Add Dish</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};
