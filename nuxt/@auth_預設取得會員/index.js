// nuxt/@auth/Scheme/local.js

async fetchUser (endpoint) {
  // Token is required but not available
  if (this.options.tokenRequired && !this.$auth.getToken(this.name)) {
    return
  }

  // User endpoint is disabled.
  if (!this.options.endpoints.user) {
    this.$auth.setUser({})
    return
  }

  // Try to fetch user and then set
  const user = await this.$auth.requestWith(
    this.name,
    endpoint,
    this.options.endpoints.user
  )
  // 重點在此，因為這套件會在打開網頁 fetchUser，若有設置 token 期限，會 401
  // 所以需在此 加 catch
  .catch(() => {
    this._logoutLocally()
  })

  this.$auth.setUser(user)
}
