const getStatusLabel = (status) => {
  switch (status) {
    case "completed":
      return "بسته";
    case "pending":
      return "باز";
    case "in-progress":
      return "در حال بررسی";
    default:
      return status;
  }
};

export default getStatusLabel;
