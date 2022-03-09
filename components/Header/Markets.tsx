import clsx from "clsx";

interface IProps {
  elements: Array<{ name: string; id: string }>;
  activeId: string;
}

export function Markets(props: IProps) {
  return (
    <div className="bg-neutral-800">
      <div className="md:container md:mx-auto md:pl-3 flex">
        {props.elements.map((element) => {
          return (
            <a
              key={element.id}
              href={`#${element.id}`}
              className={clsx(
                "py-2 px-3 md:px-5 text-[10px] sm:text-xs transition-colors hover:bg-black text-white hover:text-orange-500 focus:text-orange-500 whitespace-nowrap outline-none",
                {
                  "bg-black font-bold text-orange-500":
                    element.id === props.activeId,
                }
              )}
            >
              {element.name}
            </a>
          );
        })}
      </div>
    </div>
  );
}
