---
id: channel_token_auth
title: Channel token authorization
---

In the chapter about [channel permissions](channel_permissions.md) we mentioned that to subscribe on a channel client can provide subscription token. This chapter has more information about the subscription token mechanism in Centrifugo.

Subscription token is also JWT. Very similar to [connection token](authentication.md), but with specific custom claims.

Valid subscription token passed to Centrifugo in subscribe request will tell Centrifugo that subscription must be accepted.

The way how this token is obtained on the frontend side varies depending on a client SDK implementation. 

:::tip

Connection token and subscription token are both JWT and both can be generated with any JWT library.

:::

:::tip

Even when authorizing a subscription to a channel with a subscription JWT you should still set a proper connection JWT for a client as it provides user authentication details to Centrifugo.

:::

:::tip

Just like connection JWT using subscription JWT with a reasonable expiration time may help you have a good level of security in channels and still survive massive reconnect scenario – when many clients resubscribe alltogether.

:::

Supported JWT algorithms for private subscription tokens match algorithms to create connection JWT. The same HMAC secret key, RSA, and ECDSA public keys set for authentication tokens are re-used to check subscription JWT.

## Subscription JWT claims

For subscription JWT Centrifugo uses some standard claims defined in [rfc7519](https://datatracker.ietf.org/doc/html/rfc7519), also some custom Centrifugo-specific.

### sub

This is a standard JWT claim which must contain an ID of the current application user (**as string**). 

The value must match a user in connection JWT – since it's the same real-time connection. The missing claim will mean that token issued for anonymous user (i.e. with empty user ID).

### channel

Required. Channel that client tries to subscribe to with this token (**string**).

### info

Optional. Additional information for connection inside this channel (**valid JSON**).

### b64info

Optional. Additional information for connection inside this channel in base64 format (**string**). Will be decoded by Centrifugo to raw bytes.

### exp

Optional. This is a standard JWT claim that allows setting private channel subscription token expiration time (a UNIX timestamp in the future, in seconds, as integer) and configures subscription expiration time.

At the moment if the subscription expires client connection will be closed and the client will try to reconnect. In most cases, you don't need this and should prefer using the expiration of the connection JWT to deactivate the connection (see [authentication](authentication.md)). But if you need more granular per-channel control this may fit your needs.

Once `exp` is set in token every subscription token must be periodically refreshed. This refresh workflow happens on the client side. Refer to the specific client documentation to see how to refresh subscriptions.

### expire_at

Optional. By default, Centrifugo looks on `exp` claim to both check token expiration and configure subscription expiration time. In most cases this is fine, but there could be situations where you want to decouple subscription token expiration check with subscription expiration time. As soon as the `expire_at` claim is provided (set) in subscription JWT Centrifugo relies on it for setting subscription expiration time (JWT expiration still checked over `exp` though).

`expire_at` is a UNIX timestamp seconds when the subscription should expire.

* Set it to the future time for expiring subscription at some point
* Set it to `0` to disable subscription expiration (but still check token `exp` claim). This allows implementing a one-time subscription token. 

### aud

By default, Centrifugo does not check JWT audience ([rfc7519 aud](https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.3) claim). But if you set `token_audience` option as described in [client authentication](authentication.md#aud) then audience for subscription JWT will also be checked.

### iss

By default, Centrifugo does not check JWT issuer ([rfc7519 iss](https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.1) claim). But if you set `token_issuer` option as described in [client authentication](authentication.md#iss) then issuer for subscription JWT will also be checked.

### iat

This is a UNIX time when token was issued (seconds). See [definition in RFC](https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.6). This claim is optional but can be useful together with [Centrifugo PRO token revocation features](../pro/token_revocation.md).

### jti

This is a token unique ID. See [definition in RFC](https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.7). This claim is optional but can be useful together with [Centrifugo PRO token revocation features](../pro/token_revocation.md).

## Example

So to generate a subscription token you can use something like this in Python (assuming user ID is `42` and the channel is `gossips`):

```python
import jwt

token = jwt.encode({
    "sub": "42",
    "channel": "$gossips"
}, "secret", algorithm="HS256").decode()

print(token)
```

Where `"secret"` is the `token_hmac_secret_key` from Centrifugo configuration (we use HMAC tokens in this example which relies on a shared secret key, for RSA or ECDSA tokens you need to use a private key known only by your backend).
