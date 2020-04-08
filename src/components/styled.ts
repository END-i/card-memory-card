import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 100px);
  grid-gap: 10px;
  height: 100vh;
  justify-content: center;
  align-content: center;
`;
const Card = styled.div<{ show?: boolean }>`
  width: 100%;
  height: 100px;
  background: #4557af;
  overflow: hidden;
  img {
    width: auto;
    height: 100%;
    transform: rotate3d(0, 1, 0, ${({ show }) => (show ? 0 : 90)}deg);
    transition: 0.6s ease-in;
  }
`;
const Loading = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
`;
const CounterWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`;
const Dialog = styled.div<{ open: boolean }>`
  position: absolute;
  top: ${({ open }) => (open ? "20%" : "-100%")};
  transition: 0.5s;
  right: 0;
  left: 0;
  margin: auto;
  background: #f5fd81;
  height: 200px;
  width: 400px;
  border-radius: 5px;
  color: #4557af;
`;
const Title = styled.p<{ size?: number; center?: boolean }>`
  text-align: ${({ center }) => (center ? "center" : "inherit")};
  font-size: ${({ size }) => size || 16}px;
  font-weight: bold;
`;

export { Wrapper, Card, Loading, CounterWrapper, Dialog, Title };
