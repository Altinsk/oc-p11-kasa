import React from "react";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";
import "../../component/Collapse/Collapse.css"

const Collapse = ({data, handleClick}) => {
    const {id, title, content, equipments, visible } = {...data};
  return (
    <>
      <button className="collapse" onClick={ () => handleClick(id)}>
          <div>{title}</div>

          <div>
              {visible ? (
                  <HiChevronDown color="white" fontSize={"40"}/>
              ) : (
                  <HiChevronUp color="white" fontSize={"40"}/>
              )}
          </div>
      </button>
      {visible && (
          <div className="panel">
          {equipments?.map((equip, index) => <p key={index}>{equip}</p>) || (<p className="panel-content">{content}</p>)}
          </div>
      )}
    </>
  )
}

export default Collapse

