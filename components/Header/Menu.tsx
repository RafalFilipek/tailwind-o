import {
  Menu as MenuComponent,
  MenuButton,
  MenuItem,
  MenuLink,
  MenuPopover,
  MenuItems,
} from "@reach/menu-button";
import { ImageIcon } from "@radix-ui/react-icons";

interface IProps {
  elements: Array<{
    id: string;
    mobileName?: string;
    name: string;
    elements: Array<{
      id: string;
      mobileName?: string;
      name: string;
    }>;
  }>;
}

export function Menu(props: IProps) {
  return (
    <div className="bg-black">
      <div className="px-3 py-0 md:p-3 md:container md:mx-auto flex items-stretch md:gap-5">
        <a
          href="#"
          className="aspect-square bg-[url('https://orange.binaries.pl/binaries/o/map/ak/html/pwa_logo/Master_Logo_RGB.svg')] block bg-no-repeat bg-contain bg-center w-9 shrink-0"
        ></a>

        <ul className="flex">
          {props.elements.map((element) => {
            return <Element key={element.id} {...element} />;
          })}
        </ul>
      </div>
    </div>
  );

  function Element(props: IProps["elements"][0]) {
    return (
      <li>
        <MenuComponent>
          <MenuButton className="block bg-black font-bold text-sm sm:text-base transition-colors p-5 text-white hover:text-orange-500 focus:text-orange-500 outline-none">
            <span className="md:hidden">{props.mobileName || props.name}</span>
            <span className="hidden md:block">{props.name}</span>
          </MenuButton>

          <Submenu {...props} />
        </MenuComponent>
      </li>
    );
  }
}

function Submenu(props: IProps["elements"][0]) {
  return (
    <MenuPopover
      position={(rect) => {
        if (!rect) {
          return {};
        }
        return {
          left: 0,
          right: 0,
          top: (rect.y || 0) + rect.height,
        };
      }}
    >
      <MenuItems className="bg-black text-white outline-none">
        <div className="px-3 md:container md:mx-auto mx-auto flex flex-row gap-5 py-5 flex-wrap justify-start">
          {props.elements.map((element) => {
            return <SubmenuItem key={element.id} {...element} />;
          })}
        </div>
      </MenuItems>
    </MenuPopover>
  );
}

function SubmenuItem(props: IProps["elements"][0]["elements"][0]) {
  return (
    <MenuItem
      as="a"
      href={`#${props.name}`}
      key={props.id}
      onSelect={() => alert(props.name)}
      className="
      &[data-selected]:bg-black
          text-white text-center
          flex items-center justify-between flex-col 
          py-4 px-2 
          border border-zinc-800 
          rounded-md 
          w-[115px]
          hover:ring-2 hover:ring-blue-500
          focus:ring-2 focus:ring-blue-500
        "
    >
      <ImageIcon width={40} height={40} />
      <span className="text-xs pt-1">
        <span className="md:hidden">{props.mobileName || props.name}</span>
        <span className="hidden md:block">{props.name}</span>
      </span>
    </MenuItem>
  );
}
