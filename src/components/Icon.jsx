import { LockIcon } from "../assets/icons/LockIcon";

export function Icon({ name, size }) {
  let component = name === 'lock' && <LockIcon size={size}/>;
  return component;
}
