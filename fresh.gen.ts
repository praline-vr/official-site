// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_app from "./routes/_app.tsx";
import * as $index from "./routes/index.tsx";
import * as $Discography from "./islands/Discography.tsx";
import * as $Header from "./islands/Header.tsx";
import * as $Live from "./islands/Live.tsx";
import * as $Loading from "./islands/Loading.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_app.tsx": $_app,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/Discography.tsx": $Discography,
    "./islands/Header.tsx": $Header,
    "./islands/Live.tsx": $Live,
    "./islands/Loading.tsx": $Loading,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
