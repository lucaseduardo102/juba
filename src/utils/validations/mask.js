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

function currencyFormatBRL(value) {
  value = String(value);
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{1,})(\d{2})$/, "$1,$2");
  return value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}

function cleanCurrency(value) {
  return value.replace(/[.,]/g, "");
}

function formatToFloat(value) {
  return parseFloat((Number(value) / 100).toFixed(2));
}

function formatCardNumber(cardNumber) {
  const cleaned = cardNumber.replace(/\D/g, "");
  return cleaned.replace(/(\d{4})(?=\d)/g, "$1 ");
}

function formatNumber(number) {
  return number.replace(/\D/g, "");
}

function formatName(name) {
  return name.replace(/[^a-zA-Z\s]/g, "");
}

function formatExpirationDate(date) {
  const cleaned = date.replace(/\D/g, "");
  return cleaned.replace(/(\d{2})(\d{2})/, "$1/$2");
}

function removeSpaces(cardNumber) {
  return cardNumber.replace(/\s/g, "");
}

function formatCNPJ(cnpj) {
  cnpj = cnpj.replace(/[^\d]/g, "");
  cnpj = cnpj.replace(/^(\d{2})(\d)/, "$1.$2");
  cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
  cnpj = cnpj.replace(/\.(\d{3})(\d)/, ".$1/$2");
  return cnpj.replace(/(\d{4})(\d)/, "$1-$2");
}

function removeMaskOfCpfOrCnpj(document) {
  return document.replace(/[^\d]/g, "");
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatStatus(status) {
  return capitalizeFirstLetter(status).split("_").join(" ");
}

function dateBRL(date) {
  date = new date(date);
  let formattedDate = date.toLocaleDateString("pt-BR", {
    weekday: "long",
  });
  return formattedDate.charAt(0).toUpperCase() + formattedDate.substring(1);
}

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
  currencyFormatBRL,
  cleanCurrency,
  formatToFloat,
  formatCardNumber,
  formatNumber,
  formatName,
  formatExpirationDate,
  removeSpaces,
  formatCNPJ,
  removeMaskOfCpfOrCnpj,
  formatDate,
  formatStatus,
  dateBRL,
};
