import classes from "./LoginCheckStatus.module.css";

const LoginCheckStatus = () => {
  return (
    <>
      <div className={classes.content}>
          <h2>Logga in</h2>
        <div className={classes.input}>
          <label for="email">E-post</label>
          <input
            type="text"
            id="email"
            name="email"
          ></input>
          <label for="password">Password</label>
          <input type="text" id="password" name="password"></input>
          <p>Glömt lösenord</p>
          <p>Skapa konto</p>
          <button>Logga in</button>
        </div>
      </div>
    </>
  );
};

export default LoginCheckStatus;
