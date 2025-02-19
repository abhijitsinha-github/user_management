const extraFields = (req, res, is_insert, is_update) => {
  const user = req.body;
  const userKeys = Object.keys(user);
  let allowedFields;

  // fields are allowed to CREATE a new user
  if (is_insert) {
    allowedFields = [
      "user_id",
      "first_name",
      "last_name",
      "email",
      "age",
      "city",
      "country",
      "is_active",
    ];
  }

  // fields are allowed to UPDATE a user
  if (is_update) {
    allowedFields = [
      "first_name",
      "last_name",
      "email",
      "age",
      "city",
      "country",
      "is_active",
    ];
  }

  const extraFields = userKeys.filter((key) => !allowedFields.includes(key));

  return extraFields;
};

export { extraFields };
