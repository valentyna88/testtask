export const formatPhone = (phone) => {
  if (!phone) return "";

  const cleaned = phone.replace(/\D/g, "");

  const match = cleaned.match(/^380(\d{2})(\d{3})(\d{2})(\d{2})$/);
  if (match) {
    return `+38 (0${match[1]}) ${match[2]} ${match[3]} ${match[4]}`;
  }
  return phone;
};
