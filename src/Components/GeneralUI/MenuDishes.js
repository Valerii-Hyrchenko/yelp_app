import styled from "styled-components";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectGroup } from "../../redux/actions";
import { menuDishesConfig } from "../allConfigsConst";

const MenuDishes = () => {
  const {
    activeDishGroup: { activeDishGroup },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleChangeActiveDish = (item) => {
    dispatch(selectGroup(item));
  };
  return (
    <MenuDishesWrapper>
      {menuDishesConfig.map((item) => (
        <DishContainer
          key={item.id}
          onClick={() => handleChangeActiveDish(item)}
          active={item.id === activeDishGroup.id}
        >
          <DishImg src={item.img} alt={`${item.title}-img`} />
          <DishTitle>{item.title}</DishTitle>
        </DishContainer>
      ))}
    </MenuDishesWrapper>
  );
};

const MenuDishesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 46px;

  @media (max-width: 1410px) {
    max-width: 675px;
  }

  @media (max-width: 870px) {
    flex-direction: column;
    flex-wrap: wrap;
    height: 180px;
  }

  @media (max-width: 375px) {
    max-width: 260px;
  }
`;

const DishContainer = styled.div`
  width: 100px;
  height: 160px;
  position: relative;
  margin-right: 12px;
  -webkit-tap-highlight-color: transparent;
  background-color: ${(props) => (props.active ? "#FFF" : "#f3f3f3")};
  border-radius: 60px;
  box-shadow: ${(props) =>
    props.active ? "0px 4px 46px rgba(0, 0, 0, 0.1)" : ""};
  transition: all 200ms linear;
  cursor: pointer;

  @media (max-width: 870px) {
    width: 250px;
    height: 50px;
    border-radius: 15px;
    margin-bottom: 10px;
    margin-right: 0;
  }

  @media (max-width: 740px) {
    width: 150px;
  }

  @media (max-width: 580px) {
    width: 130px;
  }

  @media (max-width: 375px) {
    width: 125px;
  }

  ${(props) =>
    props.active &&
    `
    ${DishTitle}{
      color: #000000;
      font-size: 18px;
      transition: all 200ms linear;

      @media (max-width: 580px) {
        font-size: 16px;
      }
    }
  `}
`;

const DishImg = styled.img`
  position: absolute;
  top: 33%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 870px) {
    width: 40px;
    left: 15px;
    top: 50%;
    transform: translate(0, -50%);
  }

  @media (max-width: 740px) {
    left: 10px;
  }
`;

const DishTitle = styled.p`
  position: absolute;
  bottom: 13%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 500;
  font-size: 14px;
  color: #585858;
  text-transform: capitalize;
  transition: all 200ms linear;

  @media (max-width: 740px) {
    left: 58%;
  }

  @media (max-width: 580px) {
    left: 63%;
  }
`;

export default memo(MenuDishes);