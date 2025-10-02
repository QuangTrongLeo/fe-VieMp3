const base64Encode = obj => {
  return btoa(unescape(encodeURIComponent(JSON.stringify(obj))));
};

// const jwtToken = abc;

const apiJwtTokenUser = [
  base64Encode({ alg: 'HS256', typ: 'JWT' }),
  base64Encode({
    sub: 'user1',
    name: 'Người 1',
    roles: ['USER'],
  }),
  'signature',
].join('.');

const apiJwtTokenArtist = [
  base64Encode({ alg: 'HS256', typ: 'JWT' }),
  base64Encode({
    sub: 'user2',
    name: 'Người 2',
    roles: ['USER', 'ARTIST'],
  }),
  'signature',
].join('.');

const apiJwtTokenAdmin = [
  base64Encode({ alg: 'HS256', typ: 'JWT' }),
  base64Encode({
    sub: 'user3',
    name: 'Người 3',
    roles: ['USER', 'ADMIN'],
  }),
  'signature',
].join('.');

export { apiJwtTokenUser, apiJwtTokenArtist, apiJwtTokenAdmin };
