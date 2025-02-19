const typeChecks = (req, res, is_insert, is_update) => {
  const {
    user_id,
    first_name,
    last_name,
    email,
    age,
    city,
    country,
    is_active,
  } = req.body;

  const typeChecks = [];
  if (is_insert) {
    if (user_id) {
      if (typeof user_id !== "number") {
        typeChecks.push("user_id");
      }
    }
  }

  if (first_name) {
    if (typeof first_name !== "string") {
      typeChecks.push("first_name");
    }
  }

  if (last_name) {
    if (typeof last_name !== "string") {
      typeChecks.push("first_name");
    }
  }

  if (email) {
    if (typeof email !== "string") {
      typeChecks.push("email");
    }
  }

  if (age) {
    if (typeof age !== "number") {
      typeChecks.push("age");
    }
  }

  if (city) {
    if (typeof city !== "string") {
      typeChecks.push("city");
    }
  }

  if (country) {
    if (typeof country !== "string") {
      typeChecks.push("country");
    }
  }

  if (is_active) {
    if (typeof is_active !== "boolean") {
      typeChecks.push("is_active");
    }
  }

  return typeChecks;
};

export { typeChecks };
