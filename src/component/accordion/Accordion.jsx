import React from "react";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";
import "../accordion/Accordion.css"

const Accordion = ({data, handleClick}) => {
    const {id, title, content, equipment, visible } = {...data};
  return (
    <>
      <button className="accordion" onClick={ () => handleClick(id)}>
          <div>{title}</div>

          <div style={{textAlign: "right", marginTop: -15}}>
              {visible ? (
                  <HiChevronUp color="white" />
              ) : (
                  <HiChevronDown color="white" />
              )}
          </div>
      </button>
      {visible && (
          <div className="panel">
          {equipment?.map((equip, index) => <p key={index}>{equip}</p>) || (<p>{content}</p>)}
          </div>
      )}
    </>
  )
}

export default Accordion