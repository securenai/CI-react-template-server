export const jwtConstants = {
  secret: `${process.env.JWT_SECRET}`,
  refresh_secret: `${process.env.JWT_REFRESH_SECRET}`,
  jwt_expireIn: `${process.env.JWT_EXPIRES_IN}`,
  jwt_refresh_expireIn: `${process.env.JWT_REFRESH_EXPIRES_IN}`,
};
