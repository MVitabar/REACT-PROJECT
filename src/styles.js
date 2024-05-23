import styled from "styled-components";
import { FcFullTrash, FcInfo } from "react-icons/fc";
export const Container = styled.div`
  display: flex;
  background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const MainList = styled.div`
  gap: 10px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 1);
  padding: 30px 20px;

  ul {
    padding: 0;
    margin-top: 20px;
  }
`;

export const Input = styled.input`
  height: 30px;
  padding: 11px 164px 11px 20px;
  gap: 0px;
  border-radius: 5px;
  border: 2px solid rgba(209, 211, 212, 0.4);
  margin: 20px;
  font-size: 16px;
`;

export const Button = styled.button`
  width: 130px;
  height: 50px;
  cursor: pointer;
  padding: 10px 0px 10px 0px;
  gap: 0px;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 17px;
  font-weight: 900;
  line-height: 2.5px;
  text-align: center;
  background: rgba(128, 82, 236, 1);

  &:hover{
    opacity: 0.8;
  }

  &:active{
    opacity: 0.5;
  }
`;

export const ListItems = styled.div`
  width: 500px;
  height: 40px;
  background: ${(props) =>
    props.isFinished ? "rgba(232, 255, 139, 1)" : "rgba(228, 228, 228, 1)"};

  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
  gap: 0;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-top: 15px;

  li {
    list-style: none;
    font-size: 16px;
  }
`;

export const Trash = styled(FcFullTrash)`
  cursor: pointer;
  width: 30px;
`;

export const Check = styled(FcInfo)`
  cursor: pointer;
  width: 30px;
`;

