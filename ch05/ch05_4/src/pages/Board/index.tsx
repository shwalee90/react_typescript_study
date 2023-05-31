import { useMemo, useRef } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useDrop } from "react-dnd";
import { Title } from "../../components";
import CreateListForm from "./CreateListForm";
import BoardList from "../BoardList";
import { ListDroppable } from "../../components";
import { useLists } from "../../store/useLists";

import * as LO from "../../store/listidOrders";
import * as L from "../../store/listEntities";

export default function Board() {
  const divRef = useRef<HTMLDivElement>(null);
  const [, drop] = useDrop({
    accept: "list",
  });
  drop(divRef);

  const { lists, onRemoveList, onCreateList, onMoveList, onDragEnd } =
    useLists();

  const children = useMemo(
    () =>
      lists.map((list, index) => (
        <BoardList
          key={list.uuid}
          list={list}
          onRemoveList={onRemoveList(list.uuid)}
          index={index}
          onMoveList={onMoveList}
        />
      )),
    [lists, onRemoveList, onMoveList]
  );
  return (
    <section className="mt-4">
      <Title>Board</Title>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex flex-wrap p-2 mt-4">
          {children}
          <CreateListForm onCreateList={onCreateList} />
        </div>
      </DragDropContext>
    </section>
  );
}
