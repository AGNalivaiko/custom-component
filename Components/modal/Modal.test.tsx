import { fireEvent, render, screen } from "@testing-library/react";
import { Modal } from "./Modal";

beforeEach(() => {
  const modalRoot = document.createElement("div");
  modalRoot.setAttribute("id", "modal");
  document.body.append(modalRoot);
  jest.clearAllMocks();
});

afterEach(() => {
  const modalRoot = document.getElementById("modal");
  if (modalRoot) {
    document.body.removeChild(modalRoot);
  }
});

describe("Modal component", () => {
  const handleClick = jest.fn();

  it("Рендерится с children", () => {
    render(<Modal open={true}>test modal</Modal>);
    const modal = screen.getByText("test modal");
    expect(modal).toBeInTheDocument();
  });

  it("рендерится если open=true", () => {
    render(<Modal open={true}>test modal</Modal>);
    const modal = screen.getByText("test modal");
    expect(modal).toBeInTheDocument();
  });

  it("Закрывается по клику", () => {
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
