const missingFields = (req, res) => {
  const user = req.body;
  const userKeys = Object.keys(user);
  const allowedFields = [
    "user_id",
    "first_name",
    "last_name",
    "email",
    "age",
    "city",
    "country",
    "is_active",
  ];
  const missingFields = allowedFields.filter((key) => !userKeys.includes(key));

  return missingFields;
};

export { missingFields };
