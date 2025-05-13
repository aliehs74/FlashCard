import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useAppContext } from "../context/AppContext";

export const DraggableList = ({ children }: { children: React.ReactNode }) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const { keywords, reorderKeywords } = useAppContext();

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = keywords.findIndex(k => k.id === active.id);
      const newIndex = keywords.findIndex(k => k.id === over.id);
      const newOrder = [...keywords];
      const [moved] = newOrder.splice(oldIndex, 1);
      newOrder.splice(newIndex, 0, moved);
      reorderKeywords(newOrder);
    }
  };

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd} >
      <SortableContext items={keywords} strategy={verticalListSortingStrategy} >
        {children}
      </SortableContext>
    </DndContext>
  );
};