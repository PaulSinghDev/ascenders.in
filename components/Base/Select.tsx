import styled from "styled-components";
import { AiFillCaretDown } from "react-icons/ai";

type SelectProps = {} & React.HTMLAttributes<HTMLSelectElement>;

const Select: React.FC<SelectProps> = ({ children, ...rest }) => {
  return (
    <StyledSelect>
      <select {...rest}>{children}</select>
      <div data-type="icon">
        <AiFillCaretDown />
      </div>
    </StyledSelect>
  );
};

const StyledSelect = styled.div`
  text-align: center;
  background-color: transparent;
  border: none;
  position: relative;

  &::after {
    width: calc(100% - calc(var(--padding-lg) * 2));
    position: absolute;
    left: var(--padding-lg);
    content: "";
    height: 1px;
    background-color: rgba(0, 0, 0, 0.2);
    bottom: 0;
    transition: 0.3s ease;
  }

  &:hover {
    &::after {
      background-color: var(--orange);
      width: 50%;
    }
    > [data-type="icon"] > svg {
      fill: var(--orange);
    }
  }

  > select {
    cursor: pointer;
    padding: var(--padding-lg);
    width: 100%;
    height: 100%;
    border: none;
    background: transparent;
    font-size: 1rem;
    letter-spacing: 1px;
    appearance: none;
  }

  > [data-type="icon"] {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: var(--padding-lg);
    opacity: 0.5;
    > svg {
      transition: 0.3s ease;
    }
  }
`;

export { Select };
