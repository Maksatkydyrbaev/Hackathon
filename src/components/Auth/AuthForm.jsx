import { LockOutlined } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { authContext } from "../Context/AuthContextProvider";

const theme = createTheme();

const AuthForm = () => {
  const {
    email,
    password,
    user,

    emailError,
    passwordError,
    hasAccount,

    setPassword,
    setEmail,
    setHasAccount,

    handleLogin,
    handleLogOut,
    handleSignUp,
  } = useContext(authContext);
  console.log(user.email);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar>
              <LockOutlined />
            </Avatar>
            <Typography>Sign in</Typography>
            <Box
              onSubmit={handleSubmit}
              component="form"
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                size="small"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                helperText={emailError}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <TextField
                margin="normal"
                size="small"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                helperText={passwordError}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              {hasAccount ? (
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: "royalblue",
                    backgroundColor: "#009f7f",
                    "&:hover": {
                      background: "#009f72",
                    },
                  }}
                  onClick={handleLogin}
                >
                  Sign In
                </Button>
              ) : (
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: "royalblue",
                    backgroundColor: "#009f7f",
                    "&:hover": {
                      background: "#009f72",
                    },
                  }}
                  onClick={handleSignUp}
                >
                  Sign Up
                </Button>
              )}

              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>

                <Grid item>
                  {hasAccount ? (
                    <Link
                      href="#"
                      variant="body2"
                      onClick={() => setHasAccount(!hasAccount)}
                    >
                      {"Don't have an account? Sign Up"}
                    </Link>
                  ) : (
                    <Link
                      href="#"
                      variant="body2"
                      onClick={() => setHasAccount(!hasAccount)}
                    >
                      {"Have an account? Sign In"}
                    </Link>
                  )}
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default AuthForm;
