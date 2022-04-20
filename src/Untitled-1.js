<div>
<h3> Login </h3>
<input
  placeholder="Email..."
  onChange={(event) => {
    setLoginEmail(event.target.value);
  }}
/>
<input
  placeholder="Password..."
  onChange={(event) => {
    setLoginPassword(event.target.value);
  }}
/>

<button onClick={login}> Login</button>
</div>

<h4> User Logged In: </h4>
{user?.email}

<button onClick={logout}> Sign Out </button>
</div>