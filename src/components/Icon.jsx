import { LockIcon } from "../assets/icons/LockIcon";
import { WppIcon } from "../assets/icons/WppIcon";


export function Icon({ name, size }) {
  let component = name === 'lock' && <LockIcon size={size}/>;
  return component;
}

export function Wpp({ name, size }) {
  let component = name === 'wpp' && <WppIcon size={size}/>;
  return component;
}
