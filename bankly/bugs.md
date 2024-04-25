BUG #1: middleware/auth.js line 49

```
const token = req.body._token || req.query._token;
```

tokens should not be sent as a query param as it is not secure

BUG #2: routes/users.js line 68-72

```
router.patch(
  "/:username",
  authUser,
  requireLogin,
  requireAdmin,
```

patch route does not need to run requrieAdmin middleware because users whose username matches the url param should be able to edit as well

BUG #3 models/user.js lines 83-92

```
  static async getAll(username, password) {
    const result = await db.query(
      `SELECT username,
                first_name,
                last_name,
                email,
                phone
            FROM users
            ORDER BY username`
    );
```

method should only return basic info about all users. email and phone should not be included

BUG #4 routes/users.js lines 101-113

```
router.delete(
  "/:username",
  authUser,
  requireAdmin,
  async function (req, res, next) {
    try {
      User.delete(req.params.username);
      return res.json({ message: "deleted" });
    } catch (err) {
      return next(err);
    }
  }
)
```

User.delete needs to have await in front of it.

BUG #5 models/user.js lines 36-42

```
const result = await db.query(
      `INSERT INTO users
          (username, password, first_name, last_name, email, phone)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING username, password, first_name, last_name, email, phone`,
      [username, hashedPassword, first_name, last_name, email, phone]
    );
```

does not return admin column so that when a token is made after registering, it never has admin privileges

BUG#6 routes/auth.js lines 40-49

```
router.post('/login', async function(req, res, next) {
  try {
    const { username, password } = req.body;
    let user = User.authenticate(username, password);
    const token = createTokenForUser(username, user.admin);
    return res.json({ token });
  } catch (err) {
    return next(err);
  }
});
```

needs await in front of User.authenticate
