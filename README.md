nextjs
debounce (prevent spam API)
recoil (state management)

alt+click for multi cursor selection

install nvm
nvm install 16
nvm use 16.7.0 => use node 16.7

npm install next-auth@4.0.0-beta.7

npm install spotify-web-api-node

next-auth refresh token

change redirectUrl in spotify dev page Settings to http://localhost:3000/api/auth/callback/spotify

middlware changed in recent nextJS... downgraded to 12.1.6 with npm install next@12.1.6 --legacy-peer-deps

npm instll tailwind-scrollbar-hide

npm install lodash

npm install recoil

If you want to make skip to previous / next work, instead of "spotify.play({ uri: [<track uri>]})", use "spotify.play({context_uri: <playlist uri>, offset: {uri: <track uri>} } )"
Thanks to another comment pointing out that the currently playing song doesn't know which playlist it is in, hence being unable to skip to next / previous.
