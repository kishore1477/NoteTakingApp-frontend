import React, { useContext, useState } from 'react';
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Contex from '../../context/CreateContext';
import { Badge, Button } from 'react-bootstrap';
import { getEnumNameByValue } from '../../utils/enum-utils';
import { StatusEnum } from '../../enum';

const NoteItem = () => {
  const [open, setOpen] = useState(false);
  const context = useContext(Contex);
  const { notes, editNote } = context
  const { id } = useParams()
const navigate = useNavigate()
  var noteItem = []
  notes.map((item) => {
    if (item._id === id) {
      // return item
      noteItem.push(item)

    }
  })



  return (
    <section className="text-gray-600 body-font " style={{ userSelect: 'auto' }}>
     
      <div id='update' className="container mx-auto flex px-5 py-24 items-center justify-center flex-col" style={{ userSelect: 'auto' }}>
      <Button onClick={()=>navigate(-1)}>Back</Button>
        {noteItem && noteItem.map((item) => {

          return <>
            <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={`${item.url}`} style={{ userSelect: 'auto' }} />
            <div className="text-center lg:w-2/3 w-full" style={{ userSelect: 'auto' }}>
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900" style={{ userSelect: 'auto' }}>{item.title}</h1>
              <p className="mb-8 leading-relaxed" style={{ userSelect: 'auto' }}>{item.description}</p>
              <Badge bg={item.status === StatusEnum?.Done?"success":item.status === StatusEnum?.InProgress ?  "primary":"secondary" }>{getEnumNameByValue(StatusEnum, item?.status)}</Badge>
            </div>

          </>
        })}

      </div>




    </section>

  )
}

export default NoteItem