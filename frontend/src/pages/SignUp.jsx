import React from 'react'

export default function SignUp() {
  return (
    <section>

<div class="container">
    <div class="login-container">
      <form>
        <h2 className='text-2xl text-center font-semibold '>Login</h2>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" />
        </div>
        <button >Login</button>
      </form>
    </div>
  </div>

        
    </section>
  )
}
