import { useRef } from "react";
import { FiCheckSquare } from "react-icons/fi";

import { Form } from "./styles";
import { Modal } from "../Modal";
import { Input } from "../Input";

import { FoodDataProps } from "../Food/index";

interface ModalEditFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  editingFood: FoodDataProps | undefined;
  handleUpdateFood: (data: FoodDataProps) => void;
}
export const ModalEditFood = ({
  isOpen,
  setIsOpen,
  editingFood,
  handleUpdateFood,
}: ModalEditFoodProps) => {
  const formRef = useRef(null);

  const handleSubmit = async (data: FoodDataProps) => {
    handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Save</h1>
        <Input name="image" placeholder="Paste the image link here" />

        <Input name="name" placeholder="Ex: Soy Noodles" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Description" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Save Changes</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};
