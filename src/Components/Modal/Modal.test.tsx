import { fireEvent, render, screen } from "@testing-library/react";
import Modal from "./Modal";

beforeEach(() => {
  const modalRoot = document.createElement("div");
  modalRoot.setAttribute("id", "modal");
  document.body.append(modalRoot);
});

afterEach(() => {
  const modalRoot = document.getElementById("modal");
  if (modalRoot) {
    document.body.removeChild(modalRoot);
  }
});

describe("Modal component", () => {
  it("рендерится если open=true", () => {
    render(<Modal open>test modal</Modal>);
    const modal = screen.getByText("test modal");
    expect(modal).toBeInTheDocument();
  });

  it("Закрывается по клику", () => {
    const handleClick = jest.fn();
    render(
      <Modal open={true} onClose={handleClick}>
        test
      </Modal>,
    );

    const closeButton = screen.getByRole("button");
    fireEvent.click(closeButton);

    expect(handleClick).toHaveBeenCalled();
  });
});
