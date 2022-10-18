const app = require("./app")
const port = process.env.PORT || 5000;

app.listen(port, () => {
  try {
    console.log(`server running at port:${port}`);
  } catch (err) {
    console.log(err);
  }
});
