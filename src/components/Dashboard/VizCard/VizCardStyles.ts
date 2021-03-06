import styled from "styled-components";
import Card from "antd/es/card";

const VizCardStyled = styled(Card)`
  height: 100%;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.2);
  text-align: center;
  vertical-align: middle;

  .ant-card-head {
    width: 100%;
    padding: 5px 10px;
    border-bottom: none;
  }

  .ant-card-body {
    padding: 0px 15px 15px;
  }

  :hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }

  .divider {
    color: transparent;
  }
`;

export default VizCardStyled;
