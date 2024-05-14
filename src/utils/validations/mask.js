const cpf = (value) => {
  value = String(value);
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
  value = value.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d{1,2})$/, "$1.$2.$3-$4");
  value = value.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d{3,10})$/, "");
  return value;
};

const removeCpf = (value) => {
  if (value === null) return "";
  return value.replace(/[.-]/g, "");
};

const name = (value) => {
  value = value.replace(/^\d{0}[0-9]/, "");
  return value;
};

function date(date) {
  if (!date) {
    return "";
  }
  const toFormatDate = new Date(date);
  let formattedDate = toFormatDate.toLocaleDateString("pt-BR", {
    timeZone: "UTC",
    weekday: "long",
  });
  return formattedDate.charAt(0).toUpperCase() + formattedDate.substring(1);
}

const phone = (value) => {
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{2})(\d)/, "($1)$2");
  value = value.replace(/(\d{4})(\d{1,4})$/, "$1-$2");
  return value;
};

const time = (value) => {
  value = value.replace(/\D/, "");
  value = value.replace(/\d([2][4]|[3-9][0-9][0-9][0-9])/, "00:00");
  value = value.replace(/([0][0-9]|[1][0-9]|[2][0-3])([0-5][0-9])/, "$1:$2");
  return value;
};

const fullTime = (value) => {
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d{1})/, "$1:$2");
  value = value.replace(/(\d{2}:\d{2})(\d)/, "$1:$2");
  return value;
};

const parseDateToBrl = (value) => {
  if (!value) {
    return "";
  }
  const parts = value.split("-");
  if (parts.length !== 3) {
    return "Formato de data inválido. Use o formato yyyy-mm-dd.";
  }

  const year = parts[0];
  const month = parts[1];
  const day = parts[2];

  if (isNaN(year) || isNaN(month) || isNaN(day)) {
    return "Formato de data inválido. Use o formato yyyy-mm-dd.";
  }

  return day + "/" + month + "/" + year;
};

const timestampToTimeFormat = ({ time = 1695783600000 }) => {
  let date = new Date(Number(time));
  let timeFormatted = date.toLocaleString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return timeFormatted;
};

const timeToTimestamp = ({ time = "00:00" }) => {
  const [hours, minutes] = time.split(":").map(Number);

  if (
    isNaN(hours) ||
    isNaN(minutes) ||
    hours < 0 ||
    hours > 23 ||
    minutes < 0 ||
    minutes > 59
  ) {
    throw new Error("Hora inválida.");
  }

  const timestamp = new Date();
  timestamp.setHours(hours);
  timestamp.setMinutes(minutes);
  timestamp.setSeconds(0);
  timestamp.setMilliseconds(0);

  return timestamp;
};

const capitalizeFirstLetter = (status) => {
  if (!status) return "";

  const formattedStatus =
    status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();

  return formattedStatus;
};

export const mask = {
  cpf,
  date,
  fullTime,
  name,
  phone,
  removeCpf,
  time,
  timeToTimestamp,
  timestampToTimeFormat,
  parseDateToBrl,
  capitalizeFirstLetter,
};
