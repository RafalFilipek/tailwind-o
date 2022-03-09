import { CaretRightIcon, GlobeIcon } from "@radix-ui/react-icons";

export function MainActions() {
  return (
    <div className="p-3 lg:container mx-auto">
      <div className="overflow-y-auto flex snap-proximity snap-x scroll-px-3 gap-2">
        <Item name="Przedłuż abonament" />
        {/* <div className="w-3" /> */}
        <Item name="Przedłuż pakiet Love" />
        {/* <div className="w-3" /> */}
        <Item name="Nowy numer" />
        {/* <div className="w-3" /> */}
        <Item name="Przenieś numer" />
        {/* <div className="w-3" /> */}
        <Item name="Internet" />
      </div>
    </div>
  );
}

interface IItemProps {
  name: string;
}

function Item(props: IItemProps) {
  return (
    <div
      className="
        bg-white 
        text-black text-sm font-bold  
        px-2 py-4 
        flex flex-1 justify-between items-center 
        rounded-md 
        snap-center
      "
    >
      <GlobeIcon width={25} height={25} />
      <span className="flex-1 px-2 flex-shrink-0 whitespace-nowrap">
        {props.name}
      </span>
      <CaretRightIcon width={30} height={30} className="text-zinc-400" />
    </div>
  );
}
