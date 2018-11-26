# Bookthatapp SDK

Welcome to the BookThatApp API! You can use our API to access BookThatApp API endpoints, which can get information on various objects in our database.

We have language bindings in cURL and Javascript! You can view code examples in the dark area to the right, and you can switch the programming language of the examples with the tabs in the top right.


[Bookthatapp api doc](https://www.bookthatapp.com/docs/api/v1/index.html)


## Authorization

BookThatApp uses the shop's API key and secret to allow access to the API. The API key and secret is available in the settings menu in BookThatApp admin.

Using the /auth endpoint you can generate an authorization token. BookThatApp expects for this token to be included in all other API requests to the server in a header that looks like the following:

Authorization: Bearer your_auth_jwt_token

**You must replace your_auth_jwt_token with the token generated via the auth endpoint**

```
To get an API authentication token, pass the shop's API key and secret:

const BookThatApp = require('BookThatApp');

let api = BookThatApp.auth({key: 'key',password: 'password'});
Make sure to replace your_key and your_secret with your shop's corresponding values.

BookThatApp uses the shop's API key and secret to allow access to the API. The API key and secret is available in the settings menu in BookThatApp admin.

The above command returns JSON structured like this:

{
  "jwt": "an.auth.token"
}
```

## API

<div id="toc" class="toc-list-h1">          
          <li>
            <a href="#products" class="toc-h1 toc-link" data-title="Products">Products</a>
              <ul class="toc-list-h2" style="display: none;">
                  <li>
                    <a href="#get-all-products" class="toc-h2 toc-link" data-title="Get All Products">Get All Products</a>
                  </li>
                  <li>
                    <a href="#get-a-specific-product" class="toc-h2 toc-link" data-title="Get a Specific Product">Get a Specific Product</a>
                  </li>
              </ul>
          </li>
          <li>
            <a href="#availability" class="toc-h1 toc-link" data-title="Availability">Availability</a>
              <ul class="toc-list-h2" style="display: none;">
                  <li>
                    <a href="#frames" class="toc-h2 toc-link" data-title="Frames">Frames</a>
                  </li>
              </ul>
          </li>
          <li>
            <a href="#bookings" class="toc-h1 toc-link active-parent" data-title="Bookings">Bookings</a>
              <ul class="toc-list-h2 active" style="display: block;">
                  <li>
                    <a href="#reservations" class="toc-h2 toc-link" data-title="Reservations">Reservations</a>
                  </li>
                  <li>
                    <a href="#get-a-reservation" class="toc-h2 toc-link" data-title="Get a Reservation">Get a Reservation</a>
                  </li>
                  <li>
                    <a href="#create-a-reservation" class="toc-h2 toc-link" data-title="Create a Reservation">Create a Reservation</a>
                  </li>
                  <li>
                    <a href="#confirm-a-reservation" class="toc-h2 toc-link" data-title="Confirm a Reservation">Confirm a Reservation</a>
                  </li>
                  <li>
                    <a href="#bookings-2" class="toc-h2 toc-link" data-title="Bookings">Bookings</a>
                  </li>
                  <li>
                    <a href="#get-a-booking" class="toc-h2 toc-link" data-title="Get a Booking">Get a Booking</a>
                  </li>
                  <li>
                    <a href="#delete-a-booking" class="toc-h2 toc-link" data-title="Delete a Booking">Delete a Booking</a>
                  </li>
                  <li>
                    <a href="#blackouts" class="toc-h2 toc-link" data-title="Blackouts">Blackouts</a>
                  </li>
                  <li>
                    <a href="#create-a-blackout" class="toc-h2 toc-link active" data-title="Create a Blackout">Create a Blackout</a>
                  </li>
                  <li>
                    <a href="#get-a-blackout" class="toc-h2 toc-link" data-title="Get a Blackout">Get a Blackout</a>
                  </li>
                  <li>
                    <a href="#delete-a-blackout" class="toc-h2 toc-link" data-title="Delete a Blackout">Delete a Blackout</a>
                  </li>
              </ul>
          </li>
          <li>
            <a href="#search" class="toc-h1 toc-link" data-title="Search">Search</a>
              <ul class="toc-list-h2" style="display: none;">
                  <li>
                    <a href="#get-products" class="toc-h2 toc-link" data-title="Get Products">Get Products</a>
                  </li>
              </ul>
          </li>
          <li>
            <a href="#errors" class="toc-h1 toc-link" data-title="Errors">Errors</a>
          </li>
      </div>

## Errors

<p>The BookThatApp API uses the following error codes:</p>
 
<table><thead>
<tr>
<th>Error Code</th>
<th>Meaning</th>
</tr>
</thead><tbody>
<tr>
<td>400</td>
<td>Bad Request.</td>
</tr>
<tr>
<td>401</td>
<td>Unauthorized -- Your API key is wrong.</td>
</tr>
<tr>
<td>403</td>
<td>Forbidden -- You are not allowed to view this resource.</td>
</tr>
<tr>
<td>404</td>
<td>Not Found -- The specified resource could not be found.</td>
</tr>
<tr>
<td>405</td>
<td>Method Not Allowed -- You tried to access a resource with an invalid method.</td>
</tr>
<tr>
<td>406</td>
<td>Not Acceptable -- You requested a format that isn't json.</td>
</tr>
<tr>
<td>410</td>
<td>Gone -- The resource requested has been removed from our servers.</td>
</tr>
<tr>
<td>429</td>
<td>Too Many Requests -- You're requesting too many resources! Slow down!</td>
</tr>
<tr>
<td>500</td>
<td>Internal Server Error -- We had a problem with our server. Try again later.</td>
</tr>
<tr>
<td>503</td>
<td>Service Unavailable -- We're temporarily offline for maintenance. Please try again later.</td>
</tr>
</tbody></table>
