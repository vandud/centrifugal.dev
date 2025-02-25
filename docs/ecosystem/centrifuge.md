---
id: centrifuge
title: Centrifuge library
---

Centrifugo is a server built on top of [Centrifuge](https://github.com/centrifugal/centrifuge) library for Go language.

Due to its standalone language-agnostic nature Centrifugo dictates some rules developers should follow when integrating. If you need more freedom and a more tight integration of real-time server with application business logic you may consider using Centrifuge library to build something similar to Centrifugo but with customized behavior.

Library [README](https://github.com/centrifugal/centrifuge#readme) has detailed description, link to examples and [introduction post](/blog/2021/01/15/centrifuge-intro).

Many Centrifugo features should be re-implemented when using Centrifuge - like API layer, admin web UI, proxy etc (if you need those of course). And you need to write backend in Go language. But core functionality like a client-server protocol (all Centrifugo client connectors work with Centrifuge library based server) and Redis engine to scale come out of the box.

:::tip

Many things said in Centrifugo doc can be considered as extra documentation for Centrifuge library (for example part about infrastructure tuning or transport description). But not all of them.

:::
