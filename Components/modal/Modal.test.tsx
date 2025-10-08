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
    const modalDialog = screen.getByTestId("modal-dialog");
    expect(modalDialog).toBeInTheDocument();
    expect(modalDialog).toHaveTextContent("test modal");
  });

  it("рендерится если open=true", () => {
    render(<Modal open={true}>test modal</Modal>);
    const modalBackdrop = screen.getByTestId("modal-backdrop");
    expect(modalBackdrop).toBeInTheDocument();
  });

  it("Закрывается по клику на кнопку закрытия", () => {
    render(
      <Modal open={true} onClose={handleClick}>
        test
      </Modal>,
    );

    const closeButton = screen.getByTestId("modal-close");
    fireEvent.click(closeButton);

    expect(handleClick).toHaveBeenCalled();
  });

  it("Закрывается по клику на фон", () => {
    render(
      <Modal open={true} onClose={handleClick}>
        test
      </Modal>,
    );

    const backdrop = screen.getByTestId("modal-backdrop");
    fireEvent.click(backdrop);

    expect(handleClick).toHaveBeenCalled();
  });
});
