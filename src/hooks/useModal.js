import { useState } from "react";

/**
 * Modal Hook
 *
 * Handles opening and closing any modal.
 */
export function useModal(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function toggleModal() {
    setIsOpen((previous) => !previous);
  }

  return {
    isOpen,
    openModal,
    closeModal,
    toggleModal,
  };
}