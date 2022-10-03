import styled from "styled-components";

interface BadgeProps {
  label: string;
  color: "blue";
}

const BadgeWrapper = styled.div<{ color: string }>`
  background-color: var(--${({ color }) => color});
  display: inline-block;
  margin: 8px;
  border-radius: 5px;
  padding: calc(var(--padding-sm) / 4) calc(var(--padding-md) / 2);
  color: #fff;
  text-transform: capitalize;
  font-size: 12px;

  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-left: 0;
  }
`;

const Badge: React.FC<BadgeProps> = ({ label, color }) => (
  <BadgeWrapper color={color}>
    <span>{label}</span>
  </BadgeWrapper>
);

Badge.defaultProps = {
  color: "blue",
};

export { Badge };
